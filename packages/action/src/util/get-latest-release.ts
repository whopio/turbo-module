import { octo, repo, owner } from "../context";

const getLatestRelease = async (includePrerelease = true) => {
  if (includePrerelease) {
    const {
      data: [release],
    } = await octo.rest.repos.listReleases({
      repo,
      owner,
      per_page: 1,
    });
    return release;
  } else {
    try {
      const { data: release } = await octo.rest.repos.getLatestRelease({
        repo,
        owner,
      });
      return release;
      // eslint-disable-next-line no-empty
    } catch {}
  }
};

export default getLatestRelease;
