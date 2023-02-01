import { subCommand } from "../util/cli";
import releasePull from "./release-pull";
/* 
const github = (command: string) => {
  switch (command) {
    case "release": {
      import("./release").then(({ default: release }) => release());
      break;
    }
    case "update-pull": {
      import("./update-pull").then(({ default: updatePull }) => updatePull());
      break;
    }
    case "update-release-pull-type": {
      import("./update-release-pull").then(({ default: updateReleaseType }) =>
        updateReleaseType()
      );
      break;
    }
  }
}; */

const github = subCommand({
  release: () => import("./release"),
  "release-pull": releasePull,
});

export default github;
