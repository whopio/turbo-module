import isCanary from "../util/is-canary";
import { commit_hash, octo, owner, repo } from "./context";
import getReleaseMessage from "./util/get-message";
import releaseExists from "./util/release-exists";

const version = process.env.VERSION;

if (!version) throw new Error(`process.env.VERSION must be set`);

const release = async () => {
  if (await releaseExists(version)) {
    console.log(`${version} has already been released`);
    return;
  }
  const prerelease = isCanary(version);
  const { message } = await getReleaseMessage(prerelease);
  const { data: release } = await octo.rest.repos.createRelease({
    repo,
    owner,
    tag_name: "v" + version,
    name: "v" + version,
    body: message,
    target_commitish: commit_hash,
    prerelease,
  });
  console.log(release.html_url);
};

export default release;
