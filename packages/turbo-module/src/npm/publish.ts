import { bash, command } from "../util/exec";
import { outputJson, readJson } from "../util/fse";
import isCanary from "../util/is-canary";

/**
 * this script will get the root package.json to determine what
 * version should be publsied. It then opens the cwd packlage.json
 * replaces the package version with the root package version and
 * replaces all dependencies at version `workspace:0.0.0` with the
 * root package version too before updating the package.json on disk
 * and unning `pnpm publish`
 */
const publish = async () => {
  const rootPackageJson = await readJson("../../package.json");
  const nextVersion = rootPackageJson.version;
  const packageJson = await readJson("package.json");
  packageJson.version = nextVersion;
  if (packageJson.dependencies) {
    Object.entries(packageJson.dependencies).forEach(([dep, version]) => {
      if (version === "workspace:0.0.0")
        packageJson.dependencies[dep] = nextVersion;
    });
  }
  await outputJson("package.json", packageJson, { spaces: 2 });
  await bash`
    ${command`
      pnpm publish
        --access public
        --no-git-checks
        ${isCanary(nextVersion) ? "--tag canary" : ""}
    `}
  `;
  console.log(`${packageJson.name}@${nextVersion}: released`);
};

export default publish;
