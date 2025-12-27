import { prereleaseType, prTitlePrefix } from '../context';

const formatTitle = (releaseType: string, version?: string) => {
  const prefix = prTitlePrefix ? `${prTitlePrefix} ` : '';
  const versionSuffix = version ? ` v${version}` : '';
  return `${prefix}${releaseType}${versionSuffix}`.trim();
};

export const getFullReleaseTitle = (version?: string) =>
  formatTitle('Stable Release', version);

export const getPrereleaseTitle = (version?: string) => {
  const releaseType = prereleaseType.charAt(0).toUpperCase() + prereleaseType.slice(1);
  return formatTitle(`${releaseType} Release`, version);
};
