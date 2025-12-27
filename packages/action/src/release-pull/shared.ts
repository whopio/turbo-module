import { prereleaseType } from '../context';

export const getFullReleaseTitle = () => '(turbo-module): release next version';
export const getPrereleaseTitle = () =>
  `(turbo-module): release next ${prereleaseType} version`;
