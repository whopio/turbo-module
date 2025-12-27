import { setOutput } from '@actions/core';
import { bash, command } from '../util/exec';
import isCanary from '../util/is-canary';
import { gt } from 'semver';
import { getFolder, getJsonFile, JSONFile } from '../util/get-file';
import {
  publishPackages,
  prereleaseType,
  versionFiles,
  withWorkingDir,
} from '../context';

// Dynamic regex that supports the configured prerelease type
const createVersionParserRegexp = () =>
  new RegExp(
    `^(@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*@(\\d+\\.\\d+\\.\\d+(?:-${prereleaseType}\\.\\d+)?)`,
  );

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
            ${packageJson.name}@${isCanary(rootVersion) ? prereleaseType : 'latest'}
        `}
      `;
      if (!res) throw new Error('Únexpected error');
      const versionParserRegexp = createVersionParserRegexp();
      const [, , currentVersion] =
        versionParserRegexp.exec(res.stdout.trim()) || [];
      if (!currentVersion)
        throw new Error('Could not parse version from npm view response');
      if (gt(rootVersion, currentVersion)) {
        log(
          `Version ${rootVersion} can be published. Current version is ${currentVersion}`,
        );
        return packageJson.name;
      } else {
        log(`Version (${currentVersion}) already up to date.`);
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
  // If publish-packages is configured, use those specific paths
  if (publishPackages && publishPackages.length > 0) {
    console.log('checking configured packages: ' + publishPackages.join(', '));
    return (
      await Promise.all(
        publishPackages.map(async (pkgPath) => {
          const fullPath = withWorkingDir(pkgPath);
          // If path doesn't end with package.json, append it
          const jsonPath = fullPath.endsWith('package.json')
            ? fullPath
            : `${fullPath}/package.json`;
          return checkPackage(jsonPath as JSONFile, rootVersion);
        }),
      )
    ).filter(Boolean) as string[];
  }

  // Otherwise, scan packages/* directory (legacy behavior)
  const packagesDir = withWorkingDir('packages');
  const folders = await getFolder(packagesDir);
  console.log('checking ' + folders.map(({ path }) => path).join());
  return (
    await Promise.all(
      folders.map(async ({ path }) =>
        checkPackage(`${path}/package.json` as JSONFile, rootVersion),
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
  // Use the first version file as the source of truth for the version
  const versionFilePath = withWorkingDir(versionFiles[0]);
  const {
    content: { version },
  } = await getJsonFile<{ version: string }>(versionFilePath as JSONFile);
  console.log(
    'version:',
    version,
    `is ${prereleaseType}:`,
    isCanary(version),
  );
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
