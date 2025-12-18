import { bash, command } from '../util/exec';
import isCanary from '../util/is-canary';
import { outputJson, readJson } from '../util/fse';

/**
 * npm Trusted Publishing (OIDC) is implemented by the npm CLI. When running in
 * GitHub Actions with `permissions: id-token: write`, npm can mint short-lived
 * credentials and optionally generate provenance.
 */
const shouldUseProvenance = () => {
  // Avoid relying on Node global typings (`process`) in case this project is
  // typechecked without `@types/node` wired up in the current environment.
  const env: Record<string, string | undefined> =
    ((globalThis as unknown as { process?: { env?: Record<string, string> } })
      .process?.env as Record<string, string | undefined>) ?? {};

  // Explicit opt-in via config (works for both npm + pnpm env conventions)
  if (env.NPM_CONFIG_PROVENANCE === 'true') return true;
  if (env.npm_config_provenance === 'true') return true;

  // Auto-enable in GitHub Actions when OIDC env vars are present
  return (
    env.GITHUB_ACTIONS === 'true' &&
    !!env.ACTIONS_ID_TOKEN_REQUEST_URL &&
    !!env.ACTIONS_ID_TOKEN_REQUEST_TOKEN
  );
};

const checkLatestVersionForCanary = async (packageName: string) => {
  try {
    // `npm view <pkg> version` prints just the version string.
    const [out] = await bash`npm view ${packageName}@latest version`;
    if (!out) throw new Error('Unable to get npm view output');
    const currentVersion = out.stdout.trim();
    if (!currentVersion)
      throw new Error('Could not parse version from npm view');
    return isCanary(currentVersion.trim());
  } catch {
    return false;
  }
};

/**
 * this script will get the root package.json to determine what
 * version should be published. It then opens the cwd package.json
 * replaces the package version with the root package version and
 * replaces all dependencies at version `workspace:0.0.0` with the
 * root package version too before updating the package.json on disk
 * and running `npm publish`
 */
const publish = async () => {
  const rootPackageJson = await readJson('../../package.json');
  const nextVersion = rootPackageJson.version;
  const canary = isCanary(nextVersion);
  const packageJson = await readJson('package.json');
  const latest = !canary || checkLatestVersionForCanary(packageJson.name);
  const provenance = shouldUseProvenance();
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
      npm publish
        --access public
        --provenance
        ${canary ? '--tag canary' : ''}
    `}
    ${
      canary && (await latest)
        ? `
      npm dist-tag add ${packageJson.name}@${nextVersion} latest
    `
        : ''
    }
  `;
  console.log(`${packageJson.name}@${nextVersion}: published`);
};

export default publish;
