import { getInput } from "@actions/core";

const action = getInput("action", { required: true });

switch (action) {
  case "release": {
    import("./release").then(({ default: release }) => release());
    break;
  }
  case "sync": {
    import("./release-pull/sync").then(({ default: sync }) => sync());
    break;
  }
  case "check": {
    import("./check").then(({ default: check }) => check());
    break;
  }
  default: {
    throw new Error("Invalid argument for `action`");
  }
}
