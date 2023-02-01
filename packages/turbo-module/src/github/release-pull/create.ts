import inc from "semver/functions/inc";
import { octo, owner, repo } from "../context";
import getReleaseMessage from "../util/get-message";
import isActionUser from "../util/is-action-user";
import { Pull } from "../util/types";
import { canaryReleaseTitle, fullReleaseTitle } from "./shared";

const runAction = async () => {
  const stale: Pull[] = [];
  const staleCanary: Pull[] = [];
  for await (const { data: pulls } of octo.paginate.iterator(
    octo.rest.pulls.list,
    {
      repo,
      owner,
      state: "open",
      sort: "created",
      direction: "desc",
      per_page: 100,
    }
  ))
    for (const pull of pulls) {
      if (isActionUser(pull.user)) {
        if (fullReleaseTitle === pull.title) stale.push(pull);
        else if (canaryReleaseTitle === pull.title) staleCanary.push(pull);
      }
    }
  // close stale PRs and delete the branches
  await Promise.all(
    [...stale, ...staleCanary].map(async (stalePull) => {
      await octo.rest.pulls.update({
        repo,
        owner,
        pull_number: stalePull.number,
        state: "closed",
      });
      await octo.rest.git.deleteRef({
        repo,
        owner,
        ref: "heads/" + stalePull.head.ref,
      });
    })
  );

  const [canaryPull, fullPull] = await Promise.all([
    createPull(true),
    createPull(false),
  ]);
  // add comments to closed PRs that link to the newly created PRs
  await Promise.all([
    Promise.all(
      staleCanary.map((pull) =>
        addCommentToClosed(pull.number, canaryPull.number)
      )
    ),
    Promise.all(
      stale.map((pull) => addCommentToClosed(pull.number, fullPull.number))
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

const pull_labels = ["no automerge", "keep up-to-date"];

export const createPull = async (prerelease: boolean) => {
  const title = prerelease ? canaryReleaseTitle : fullReleaseTitle;
  const releaseLabel = prerelease ? "releases: canary" : "releases: patch";
  const { data: content } = await octo.rest.repos.getContent({
    repo,
    owner,
    path: "package.json",
  });
  if (!("content" in content))
    throw new Error("Could not get package.json contents");
  const packageJson = JSON.parse(
    Buffer.from(content.content, "base64").toString()
  ) as { version?: string };
  let newVersion: string | null;
  if (!packageJson.version || packageJson.version.startsWith("0.0.0")) {
    newVersion = prerelease ? "0.0.1-canary.0" : "0.0.1";
  } else {
    newVersion = prerelease
      ? inc(packageJson.version, "prerelease", "canary")
      : inc(packageJson.version, "patch");
  }
  if (!newVersion) throw new Error("Could not increase version");
  packageJson.version = newVersion;
  const {
    data: {
      object: { sha },
    },
  } = await octo.rest.git.getRef({
    owner,
    repo,
    ref: `heads/main`,
  });
  const shortSha = sha.slice(0, 6) + sha.slice(-6);
  const branch = prerelease
    ? `turbo-module/release-${shortSha}-canary`
    : `turbo-module/release-${shortSha}`;
  await octo.rest.git.createRef({
    owner,
    repo,
    sha,
    ref: `refs/heads/${branch}`,
  });
  await octo.rest.repos.createOrUpdateFileContents({
    repo,
    owner,
    path: "package.json",
    message: `release patch ${packageJson.version}`,
    content: Buffer.from(JSON.stringify(packageJson, null, 2) + "\n").toString(
      "base64"
    ),
    sha: content.sha,
    branch,
  });
  const { message } = await getReleaseMessage(prerelease);
  const { data: pull } = await octo.rest.pulls.create({
    repo,
    owner,
    title,
    body: message,
    head: branch,
    base: "main",
  });
  await octo.rest.issues.addLabels({
    repo,
    owner,
    issue_number: pull.number,
    labels: [...pull_labels, releaseLabel],
  });
  return pull;
};

export default runAction;
