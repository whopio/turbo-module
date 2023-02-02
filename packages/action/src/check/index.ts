import { setOutput } from '@actions/core';
import { bash, command } from '../util/exec';
import isCanary from '../util/is-canary';
import { gt } from 'semver';
import { getFolder, getJsonFile, JSONFile } from '../util/get-file';

const versionParserRegexp =
  /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*@(\d+\.\d+\.\d+(?:-canary\.\d)?)/;

const checkPackage = async (pkg: JSONFile, rootVersion: string) => {
  try {
    const { content: packageJson } = await getJsonFile<{
      name: string;
      private?: boolean;
    }>(pkg);
    const log = (...args: unknown[]) => {
      console.log(`${packageJson.name}:`, ...args);
    };
    if (packageJson.private !== false) {
      log('Skipping private package');
      return;
    }
    try {
      const [res] = await bash`
        ${command`
          npm view 
            ${packageJson.name}@${isCanary(rootVersion) ? 'canary' : 'latest'}
        `}
      `;
      if (!res) throw new Error('Únexpected error');
      const [, , currentVersion] =
        versionParserRegexp.exec(res.stdout.trim()) || [];
      if (!currentVersion)
        throw new Error('Could not parse version from npm view response');
      if (gt(rootVersion, currentVersion)) {
        log(`Version ${rootVersion} can be published.`);
        return packageJson.name;
      } else {
        log(`Already up to date.`);
      }
    } catch (_e) {
      log(`Not found in registry.`);
      return packageJson.name;
    }
  } catch {
    return;
  }
};

const checkPackages = async (rootVersion: string) => {
  const folders = await getFolder('packages');
  console.log('checking ' + folders.map(({ path }) => path).join());
  return (
    await Promise.all(
      folders.map(async ({ path }) =>
        checkPackage(`${path}/package.json`, rootVersion),
      ),
    )
  ).filter(Boolean) as string[];
};

/**
 * this script checks the version of the root package.json against
 * the latest or latest canary version of the modules and then
 * uses semver to determine if a new version can be published.
 * It sets the results as github actions output as this script is
 * inteded to be ran as part of a workflow
 */
const canPublish = async () => {
  const {
    content: { version },
  } = await getJsonFile<{ version: string }>('package.json');
  console.log('version:', version, 'is canary:', isCanary(version));
  // any version starting with 0.0.0 is considered a initial dev
  // version and will not be published
  if (version.startsWith('0.0.0')) {
    setOutput('can-publish', false);
    setOutput('version', version);
  } else {
    const publishable = await checkPackages(version);
    setOutput('can-publish', Boolean(publishable.length));
    setOutput('filter', publishable.map((pkg) => `--filter=${pkg}`).join(' '));
    setOutput('version', version);
  }
};

export default canPublish;
