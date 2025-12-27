import inc from 'semver/functions/inc';
import {
  octo,
  owner,
  repo,
  versionFiles,
  prereleaseType,
  baseBranch,
  withWorkingDir,
  prLabels,
} from '../context';
import getReleaseMessage from '../util/get-message';
import isActionUser from '../util/is-action-user';
import { Pull } from '../util/types';
import { getPrereleaseTitle, getFullReleaseTitle } from './shared';

const runAction = async () => {
  const stale: Pull[] = [];
  const stalePrerelease: Pull[] = [];
  for await (const { data: pulls } of octo.paginate.iterator(
    octo.rest.pulls.list,
    {
      repo,
      owner,
      state: 'open',
      sort: 'created',
      direction: 'desc',
      per_page: 100,
    },
  ))
    for (const pull of pulls) {
      // Match by branch pattern instead of title (titles now include versions)
      if (isActionUser(pull.user) && pull.head.ref.startsWith('turbo-module/release-')) {
        if (pull.head.ref.includes(`-${prereleaseType}`)) {
          stalePrerelease.push(pull);
        } else {
          stale.push(pull);
        }
      }
    }
  // close stale PRs and delete the branches
  await Promise.all(
    [...stale, ...stalePrerelease].map(async (stalePull) => {
      await octo.rest.pulls.update({
        repo,
        owner,
        pull_number: stalePull.number,
        state: 'closed',
      });
      await octo.rest.git.deleteRef({
        repo,
        owner,
        ref: 'heads/' + stalePull.head.ref,
      });
    }),
  );

  const [prereleasePull, fullPull] = await Promise.all([
    createPull(true),
    createPull(false),
  ]);
  // add comments to closed PRs that link to the newly created PRs
  await Promise.all([
    Promise.all(
      stalePrerelease.map((pull) =>
        addCommentToClosed(pull.number, prereleasePull.number),
      ),
    ),
    Promise.all(
      stale.map((pull) => addCommentToClosed(pull.number, fullPull.number)),
    ),
  ]);
};

const addCommentToClosed = async (number: number, replacement: number) => {
  await octo.rest.issues.createComment({
    repo,
    owner,
    issue_number: number,
    body: `Closing stale auto-release PR in favor of #${replacement}`,
  });
};

const pull_labels = ['auto-release-pr', 'keep up-to-date', ...prLabels];

export const createPull = async (prerelease: boolean) => {
  const releaseLabel = prerelease
    ? `releases: ${prereleaseType}`
    : 'releases: patch';

  // Get the first version file to determine current version
  const primaryVersionFile = withWorkingDir(versionFiles[0]);
  const { data: content } = await octo.rest.repos.getContent({
    repo,
    owner,
    path: primaryVersionFile,
  });
  if (!('content' in content))
    throw new Error('Could not get package.json contents');
  const packageJson = JSON.parse(
    Buffer.from(content.content, 'base64').toString(),
  ) as { version?: string };

  let newVersion: string | null;
  if (!packageJson.version || packageJson.version.startsWith('0.0.0')) {
    newVersion = prerelease ? `0.0.1-${prereleaseType}.0` : '0.0.1';
  } else {
    newVersion = prerelease
      ? inc(packageJson.version, 'prerelease', prereleaseType)
      : inc(packageJson.version, 'patch');
  }
  if (!newVersion) throw new Error('Could not increase version');

  const title = prerelease
    ? getPrereleaseTitle(newVersion)
    : getFullReleaseTitle(newVersion);

  const {
    data: {
      object: { sha },
    },
  } = await octo.rest.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  });
  const shortSha = sha.slice(0, 6) + sha.slice(-6);
  const branch = prerelease
    ? `turbo-module/release-${shortSha}-${prereleaseType}`
    : `turbo-module/release-${shortSha}`;

  await octo.rest.git.createRef({
    owner,
    repo,
    sha,
    ref: `refs/heads/${branch}`,
  });

  // Update all version files with the new version
  for (const versionFile of versionFiles) {
    const filePath = withWorkingDir(versionFile);
    console.log(`Updating version in ${filePath} to ${newVersion}`);

    const { data: fileContent } = await octo.rest.repos.getContent({
      repo,
      owner,
      path: filePath,
      ref: branch,
    });
    if (!('content' in fileContent))
      throw new Error(`Could not get ${filePath} contents`);

    const filePackageJson = JSON.parse(
      Buffer.from(fileContent.content, 'base64').toString(),
    ) as { version?: string };
    filePackageJson.version = newVersion;

    await octo.rest.repos.createOrUpdateFileContents({
      repo,
      owner,
      path: filePath,
      message: `release: ${newVersion}`,
      content: Buffer.from(
        JSON.stringify(filePackageJson, null, 2) + '\n',
      ).toString('base64'),
      sha: fileContent.sha,
      branch,
    });
  }

  const { message } = await getReleaseMessage(prerelease);
  const { data: pull } = await octo.rest.pulls.create({
    repo,
    owner,
    title,
    body: message,
    head: branch,
    base: baseBranch,
    draft: true,
  });
  let err = 0;
  while (err < 5) {
    try {
      await octo.rest.issues.addLabels({
        repo,
        owner,
        issue_number: pull.number,
        labels: [...pull_labels, releaseLabel],
      });
      return pull;
    } catch (e) {
      console.error(e);
      err++;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
  throw new Error('Could not add labels to PR');
};

export default runAction;
