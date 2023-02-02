import { octo, owner, repo } from '../context';

const releaseExists = async (tag: string) => {
  try {
    await octo.rest.repos.getReleaseByTag({ repo, owner, tag: `v${tag}` });
    return true;
  } catch {
    return false;
  }
};

export default releaseExists;
