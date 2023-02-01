import { GITHUB_ACTION_USERNAME } from "../../util/constants";

const isActionUser = (user?: { login: string } | null) => {
  return user?.login === GITHUB_ACTION_USERNAME;
};

export default isActionUser;
