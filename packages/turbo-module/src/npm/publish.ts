import { bash, command } from '../util/exec';
import isCanary from '../util/is-canary';
import { outputJson, readJson } from '../util/fse';

const getEnv = (): Record<string, string | undefined> =>
  ((globalThis as unknown as { process?: { env?: Record<string, string> } })
    .process?.env as Record<string, string | undefined>) ?? {};

/**
 * npm Trusted Publishing (OIDC) is implemented by the npm CLI. When running in
 * GitHub Actions with `permissions: id-token: write`, npm can mint short-lived
 * credentials and optionally generate provenance.
 */
const shouldUseProvenance = (env: Record<string, string | undefined>) => {
  // Explicit opt-in via config (works for both npm + pnpm env conventions)
  if (env.NPM_CONFIG_PROVENANCE === 'true') return true;
  if (env.npm_config_provenance === 'true') return true;

  // Auto-enable in GitHub Actions; prefer OIDC presence, but fall back to on
  // when running in Actions to surface clearer errors instead of ENEEDAUTH.
  if (env.GITHUB_ACTIONS === 'true') return true;

  return (
    !!env.ACTIONS_ID_TOKEN_REQUEST_URL && !!env.ACTIONS_ID_TOKEN_REQUEST_TOKEN
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
  const env = getEnv();
  const rootPackageJson = await readJson('../../package.json');
  const nextVersion = rootPackageJson.version;
  const canary = isCanary(nextVersion);
  const packageJson = await readJson('package.json');
  const latest =
    !canary || (await checkLatestVersionForCanary(packageJson.name));
  const provenance = shouldUseProvenance(env);
  console.log(
    '[publish debug]',
    JSON.stringify(
      {
        canary,
        latest,
        provenance,
        env: {
          githubActions: env.GITHUB_ACTIONS === 'true',
          hasIdTokenUrl: Boolean(env.ACTIONS_ID_TOKEN_REQUEST_URL),
          hasIdTokenToken: Boolean(env.ACTIONS_ID_TOKEN_REQUEST_TOKEN),
          npmConfigProvenance:
            env.NPM_CONFIG_PROVENANCE ?? env.npm_config_provenance,
          nodeAuthToken: env.NODE_AUTH_TOKEN ? 'present' : 'missing',
        },
      },
      null,
      2,
    ),
  );
  packageJson.version = nextVersion;
  if (packageJson.dependencies) {
    Object.entries(packageJson.dependencies).forEach(([dep, version]) => {
      if (version === 'workspace:0.0.0')
        packageJson.dependencies[dep] = nextVersion;
    });
  }
  await outputJson('package.json', packageJson, { spaces: 2 });
  console.log(`${packageJson.name}@${nextVersion}: publishing`);
  const publishArgs = [
    '--access public',
    provenance ? '--provenance' : '',
    canary ? '--tag canary' : '',
  ].filter(Boolean);
  await bash`
    ${command`
      npm publish
        ${publishArgs.join('\n        ')}
    `}
    ${
      canary && latest
        ? `
      npm dist-tag add ${packageJson.name}@${nextVersion} latest
    `
        : ''
    }
  `;
  console.log(`${packageJson.name}@${nextVersion}: published`);
};

export default publish;
