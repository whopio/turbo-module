import { octo, repo, owner } from "../context";

const getLatestRelease = async (includePrerelease: boolean = true) => {
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
    } catch {}
  }
};

export default getLatestRelease;
