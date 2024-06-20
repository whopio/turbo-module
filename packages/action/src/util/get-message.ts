import { commit_hash, initial_commit } from '../context';
import collectCommits from './collect-commits';
import getFirstCommit from './get-first-commit';
import getLatestRelease from './get-latest-release';
import { ReleaseStats } from './types';

const capitalise = (str: string) =>
  `${str.at(0)?.toUpperCase() || ''}${str.slice(1)}`;

// GitHub enforces a max length of 65536 characters for a pull request body
const maxLength = 65536;
const lengthBuffer = 1000;

export const makeGithubReleaseMessage = (stats: ReleaseStats) => {
  const message = `
${Object.entries(stats.pulls)
  .map(
    ([key, pulls]) => `
### ${capitalise(key)} Changes

${pulls.map(({ title }) => `- ${title}`).join('\n')}
`,
  )
  .join('')}
### Credits
${Array.from(stats.authors)
  .map((author) => `@${author}`)
  .join(', ')}
`.trim();

  if (message.length >= maxLength) {
    return `${message.slice(
      0,
      maxLength - lengthBuffer,
    )}...\nThis message has been truncated to avoid exceeding the GitHub API's body limit.`;
  }

  return message;
};

const getReleaseMessage = async (prerelease: boolean) => {
  const latestRelease = await getLatestRelease(prerelease);
  const compareCommit =
    latestRelease?.target_commitish ||
    initial_commit ||
    (await getFirstCommit()).oid;
  const stats = await collectCommits(commit_hash, compareCommit);
  return {
    message: makeGithubReleaseMessage(stats),
    release: latestRelease,
  };
};

export default getReleaseMessage;
