import { subCommand } from "../util/cli";

const npm = subCommand({
  publish: () => import("./publish"),
});

export default npm;
