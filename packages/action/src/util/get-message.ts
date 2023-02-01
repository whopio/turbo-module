import { commit_hash, initial_commit } from "../context";
import collectCommits from "./collect-commits";
import getFirstCommit from "./get-first-commit";
import getLatestRelease from "./get-latest-release";
import { ReleaseStats } from "./types";

const capitalise = (str: string) =>
  `${str.at(0)?.toUpperCase() || ""}${str.slice(1)}`;

export const makeGithubReleaseMessage = (stats: ReleaseStats) =>
  `
${Object.entries(stats.pulls)
  .map(
    ([key, pulls]) => `
### ${capitalise(key)} Changes

${pulls.map(({ title }) => `- ${title}`).join("\n")}
`
  )
  .join("")}
### Credits
${Array.from(stats.authors)
  .map((author) => `@${author}`)
  .join(", ")}
`.trim();

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
