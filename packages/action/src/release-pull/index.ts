import { subCommand } from "../../util/cli";

const releasePull = subCommand({
  create: () => import("./create"),
  sync: () => import("./sync"),
  type: () => import("./type"),
});

export default releasePull;
