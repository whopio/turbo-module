import { prereleaseType } from '../context';

export const getFullReleaseTitle = (version?: string) =>
  version ? `Release v${version}` : '(turbo-module): release next version';
export const getPrereleaseTitle = (version?: string) =>
  version
    ? `Release v${version}`
    : `(turbo-module): release next ${prereleaseType} version`;
