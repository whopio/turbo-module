import { octo, owner, repo } from "../context";
import isActionUser from "./is-action-user";
import { ReleasePulls, ReleaseStats } from "./types";

const addPull = (
  pulls: ReleasePulls,
  type: string,
  number: number,
  title: string
) => {
  if (!pulls[type]) pulls[type] = [];
  pulls[type].push({ number, title });
};

const collectCommits = async (head: string, base: string) => {
  const stats: ReleaseStats = {
    authors: new Set(),
    pulls: {},
  };
  for await (const {
    data: { commits },
  } of octo.paginate.iterator(octo.rest.repos.compareCommits, {
    owner,
    repo,
    base,
    head,
    per_page: 100,
  }))
    for (const commit of commits) {
      const message = commit.commit.message.split("\n")[0];
      const PR = /\(#(\d+)\)$/.exec(message)?.[1];
      if (!PR) continue;
      const pull_number = parseInt(PR);
      if (commit.author?.login) {
        if (isActionUser(commit.author) && message.startsWith("release "))
          continue;
        if (message.startsWith("(turbo-module): ")) continue;
        stats.authors.add(commit.author.login);
      }
      const { data: pr } = await octo.rest.pulls.get({
        repo,
        owner,
        pull_number,
      });
      const areas = pr.labels
        .filter(({ name }) => /^area: /.test(name))
        .map(({ name }) => name.replace(/^area: /, ""));

      if (!areas.length) {
        addPull(stats.pulls, "general", pull_number, message);
      } else
        for (const area of areas)
          addPull(stats.pulls, area, pull_number, message);
    }
  return stats;
};

export default collectCommits;
