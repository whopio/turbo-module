import { context, getOctokit } from "@actions/github";
import type { GitHub } from "@actions/github/lib/utils";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) throw new Error(`proces.env.GITHUB_TOKEN must be set`);

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

export const initial_commit: string | undefined = process.env.INITIAL_COMMIT;
