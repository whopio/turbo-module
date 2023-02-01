import { getInput } from "@actions/core";

const main = async () => {
  const published = getInput("published", { required: true }) === "true";
  if (published) {
    const { default: create } = await import("../release-pull/create");
    create();
  } else {
    const { default: sync } = await import("../release-pull/sync");
    sync();
  }
};

export default main;
