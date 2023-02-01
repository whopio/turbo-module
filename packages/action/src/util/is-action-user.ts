const GITHUB_ACTION_USERNAME = "github-actions[bot]";

const isActionUser = (user?: { login: string } | null) => {
  return user?.login === GITHUB_ACTION_USERNAME;
};

export default isActionUser;
