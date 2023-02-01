#!/usr/bin/env node

import github from "./github";
import npm from "./npm";
import { cli } from "./util/cli";

cli({
  npm,
  github,
})();

export {};
