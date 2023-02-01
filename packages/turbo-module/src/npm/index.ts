import { subCommand } from "../util/cli";

const npm = subCommand({
  "can-publish": () => import("./can-publish"),
  publish: () => import("./publish"),
});

export default npm;
