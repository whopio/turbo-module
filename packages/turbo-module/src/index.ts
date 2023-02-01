#!/usr/bin/env node

import npm from "./npm";
import { cli } from "./util/cli";

cli({
  npm,
})();

export {};
