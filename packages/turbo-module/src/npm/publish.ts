import { bash, command } from '../util/exec';
import isCanary from '../util/is-canary';
import { outputJson, readJson } from '../util/fse';

const versionParserRegexp =
  /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*@(\d+\.\d+\.\d+(?:-canary\.\d)?)/;

const checkLatestVersionForCanary = async (packageName: string) => {
  try {
    const [out] = await bash`
      pnpm view ${packageName}@latest
    `;
    if (!out) throw new Error('Unable to get npm view output');
    const [, , currentVersion] =
      versionParserRegexp.exec(out.stdout.trim()) || [];
    if (!currentVersion)
      throw new Error('Could not parse version from npm view response');
    return isCanary(currentVersion);
  } catch {
    return false;
  }
};

/**
 * this script will get the root package.json to determine what
 * version should be publsied. It then opens the cwd packlage.json
 * replaces the package version with the root package version and
 * replaces all dependencies at version `workspace:0.0.0` with the
 * root package version too before updating the package.json on disk
 * and unning `pnpm publish`
 */
const publish = async () => {
  const rootPackageJson = await readJson('../../package.json');
  const nextVersion = rootPackageJson.version;
  const canary = isCanary(nextVersion);
  const packageJson = await readJson('package.json');
  const latest = !canary || checkLatestVersionForCanary(packageJson.name);
  packageJson.version = nextVersion;
  if (packageJson.dependencies) {
    Object.entries(packageJson.dependencies).forEach(([dep, version]) => {
      if (version === 'workspace:0.0.0')
        packageJson.dependencies[dep] = nextVersion;
    });
  }
  await outputJson('package.json', packageJson, { spaces: 2 });
  console.log(`${packageJson.name}@${nextVersion}: publishing`);
  await bash`
    ${command`
      pnpm publish
        --access public
        --no-git-checks
        ${canary ? '--tag canary' : ''}
    `}
    ${
      canary && (await latest)
        ? `
      pnpm dist-tag add ${packageJson.name}@${nextVersion} latest
    `
        : ''
    }
  `;
  console.log(`${packageJson.name}@${nextVersion}: published`);
};

export default publish;
