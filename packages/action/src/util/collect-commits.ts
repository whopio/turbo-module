import { octo, owner, repo, maxChangelogCommits, workingDirectory } from '../context';
import isActionUser from './is-action-user';
import { ReleasePulls, ReleaseStats } from './types';

const addPull = (
  pulls: ReleasePulls,
  type: string,
  number: number,
  title: string,
) => {
  if (!pulls[type]) pulls[type] = [];
  pulls[type].push({ number, title });
};

// Check if a commit touches files in the working directory
const commitTouchesWorkingDir = async (sha: string): Promise<boolean> => {
  if (workingDirectory === '.') return true; // No filtering needed for root

  try {
    const { data: commit } = await octo.rest.repos.getCommit({
      owner,
      repo,
      ref: sha,
    });

    const touchesDir = commit.files?.some(file =>
      file.filename.startsWith(`${workingDirectory}/`)
    ) ?? false;

    return touchesDir;
  } catch (e) {
    // If we can't fetch the commit, include it to be safe
    return true;
  }
};

const collectCommits = async (head: string, base: string) => {
  const stats: ReleaseStats = {
    authors: new Set(),
    pulls: {},
  };
  let commitCount = 0;
  for await (const {
    data: { commits },
  } of octo.paginate.iterator(octo.rest.repos.compareCommits, {
    owner,
    repo,
    base,
    head,
    per_page: 100,
  })) {
    for (const commit of commits) {
      if (maxChangelogCommits > 0 && commitCount >= maxChangelogCommits) {
        console.log(`Reached max commit limit (${maxChangelogCommits}), stopping changelog scan`);
        return stats;
      }
      commitCount++;

      // Skip commits that don't touch files in the working directory
      if (!(await commitTouchesWorkingDir(commit.sha))) {
        continue;
      }

      const message = commit.commit.message.split('\n')[0];
      const PR = /\(#(\d+)\)$/.exec(message)?.[1];
      if (!PR) continue;
      const pull_number = parseInt(PR);
      if (commit.author?.login) {
        if (isActionUser(commit.author) && message.startsWith('release '))
          continue;
        if (message.startsWith('(turbo-module): ')) continue;
        stats.authors.add(commit.author.login);
      }
      try {
        const { data: pr } = await octo.rest.pulls.get({
          repo,
          owner,
          pull_number,
        });
        const areas = pr.labels
          .filter(({ name }) => /^area: /.test(name))
          .map(({ name }) => name.replace(/^area: /, ''));

        if (!areas.length) {
          addPull(stats.pulls, 'general', pull_number, message);
        } else
          for (const area of areas)
            addPull(stats.pulls, area, pull_number, message);
      } catch (e) {
        // PR might not exist in this repo (e.g., monorepo with commits from other repos)
        console.log(`Skipping PR #${pull_number} - not found in this repo`);
        addPull(stats.pulls, 'general', pull_number, message);
      }
    }
  }
  return stats;
};

export default collectCommits;
