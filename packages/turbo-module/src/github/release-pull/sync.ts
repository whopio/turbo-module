import isActionUser from "../util/is-action-user";
import { octo, owner, repo } from "../context";
import getReleaseMessage from "../util/get-message";
import { Pull } from "../util/types";
import { canaryReleaseTitle, fullReleaseTitle } from "./shared";
import { createPull } from "./create";

const syncPull = async (pull: Pull, prerelease: boolean) => {
  console.log(`syncing pull #${pull.number}, is prerelease: ${prerelease}`);
  const { message } = await getReleaseMessage(prerelease);
  if (pull.body !== message) {
    await octo.rest.pulls.update({
      owner,
      repo,
      pull_number: pull.number,
      body: message,
    });
  }
};

const runAction = async () => {
  let full: Promise<unknown> | undefined;
  let canary: Promise<unknown> | undefined;
  for await (const { data: pulls } of octo.paginate.iterator(
    octo.rest.pulls.list,
    {
      repo,
      owner,
      state: "open",
      sort: "created",
      direction: "desc",
      per_page: 100,
    }
  )) {
    for (const pull of pulls) {
      if (isActionUser(pull.user)) {
        switch (pull.title) {
          case fullReleaseTitle: {
            if (!full) full = syncPull(pull, false);
            break;
          }
          case canaryReleaseTitle: {
            if (!canary) canary = syncPull(pull, true);
            break;
          }
        }
      }
      if (full && canary) break;
    }
    if (full && canary) break;
  }

  if (!full) full = createPull(false);
  if (!canary) canary = createPull(true);

  await Promise.all([full, canary]);
};

export default runAction;
