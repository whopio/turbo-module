import { getInput } from '@actions/core';
import { context, getOctokit } from '@actions/github';
import type { GitHub } from '@actions/github/lib/utils';

const GITHUB_TOKEN = getInput('token', { required: true });

export const octo: InstanceType<typeof GitHub> = getOctokit(GITHUB_TOKEN);
export const {
  repo: { owner, repo },
  sha: commit_hash,
  payload: {
    issue: target_issue,
    comment: target_comment,
    pull_request: target_pull,
  },
} = context;

export const initial_commit: string | undefined = getInput('initial-commit');

// Monorepo support configuration
export const workingDirectory: string = getInput('working-directory') || '.';
export const versionFiles: string[] = JSON.parse(
  getInput('version-files') || '["package.json"]',
);
export const publishPackages: string[] | undefined = getInput('publish-packages')
  ? JSON.parse(getInput('publish-packages'))
  : undefined;
export const prereleaseType: string = getInput('prerelease-type') || 'canary';
export const baseBranch: string = getInput('base-branch') || 'main';
export const maxChangelogCommits: number = parseInt(getInput('max-changelog-commits') || '100', 10);
export const prTitlePrefix: string = getInput('pr-title-prefix') || '';

// Helper to join working directory with a path
export const withWorkingDir = (path: string): string => {
  if (workingDirectory === '.') return path;
  return `${workingDirectory}/${path}`;
};
