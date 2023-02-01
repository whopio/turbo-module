import { inc } from "semver";
import { octo, owner, repo, target_comment, target_issue } from "../context";
import getCodeOwners from "../util/get-codeowners";

const types = ["patch", "minor", "major"] as const;

type ReleaseTypes = (typeof types)[number];

const getPackageJson = async (ref?: string) => {
  const { data: content } = await octo.rest.repos.getContent({
    repo,
    owner,
    path: "package.json",
    ref,
  });
  if ("content" in content) {
    return {
      content: JSON.parse(
        Buffer.from(content.content, "base64").toString()
      ) as {
        version: string;
      },
      sha: content.sha,
    };
  }
  throw new Error("Could not load main package.json");
};

const performUpdate = async (type: ReleaseTypes) => {
  if (!target_issue)
    throw new Error(`Expected Action to run on "issue_comment"`);
  const {
    data: {
      labels,
      head: { ref: branch },
    },
  } = await octo.rest.pulls.get({
    repo,
    owner,
    pull_number: target_issue.number,
  });
  /*  await octo.rest.pulls.updateBranch({
    repo,
    owner,
    pull_number: target_issue.number,
  }); */
  const releaseTypeLabel = labels.find(({ name }) =>
    name.startsWith("releases: ")
  );
  const current_type = releaseTypeLabel?.name.replace("releases: ", "");
  if (current_type === "canary" || type === current_type) return;
  const { content: mainPackageJson } = await getPackageJson("main");
  const { content: currentPackageJson, sha: packageSha } = await getPackageJson(
    branch
  );
  const currentVersion = mainPackageJson.version.startsWith("0.0.0")
    ? "0.0.0"
    : mainPackageJson.version;
  const newVersion = inc(currentVersion, type);
  if (!newVersion)
    throw new Error(`Could not increase ${type} for ${currentVersion}`);

  if (currentPackageJson.version !== newVersion) {
    currentPackageJson.version = newVersion;

    await octo.rest.repos.createOrUpdateFileContents({
      repo,
      owner,
      path: "package.json",
      message: `release ${type} ${newVersion}`,
      content: Buffer.from(
        JSON.stringify(currentPackageJson, null, 2) + "\n"
      ).toString("base64"),
      sha: packageSha,
      branch,
    });
  }

  const promises: Promise<unknown>[] = [
    octo.rest.issues.addLabels({
      repo,
      owner,
      issue_number: target_issue.number,
      labels: [`releases: ${type}`],
    }),
  ];
  if (releaseTypeLabel)
    promises.push(
      octo.rest.issues.removeLabel({
        repo,
        owner,
        issue_number: target_issue.number,
        name: releaseTypeLabel.name,
      })
    );
  await Promise.all(promises);
};

const teamOwnershipRegex = /^@(.*)\/(.*)$/;

const runAction = async () => {
  if (!target_comment)
    throw new Error(`Expected Action to run on "issue_comment"`);
  const { data: comment } = await octo.rest.issues.getComment({
    repo,
    owner,
    comment_id: target_comment.id,
  });
  if (comment.body && types.includes(comment.body.slice(1) as ReleaseTypes)) {
    const packageCodeOwners = await getCodeOwners("/package.json");
    const type = comment.body.slice(1) as ReleaseTypes;
    for (const packageCodeOwner of packageCodeOwners) {
      if (teamOwnershipRegex.test(packageCodeOwner) && comment.user) {
        const [, org, team_slug] =
          teamOwnershipRegex.exec(packageCodeOwner) || [];
        if (!org || !team_slug) continue;
        try {
          const {
            data: { state },
          } = await octo.rest.teams.getMembershipForUserInOrg({
            team_slug,
            org,
            username: comment.user.login,
          });
          if (state !== "active") continue;
        } catch {
          continue;
        }
        await performUpdate(type);
        return;
      } else if (packageCodeOwner === `@${comment.user?.login}`) {
        await performUpdate(type);
        return;
      }
    }
  }
};

export default runAction;
