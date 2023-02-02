#!/usr/bin/env node

import { cli } from './util/cli';

cli({
  publish: () => import('./npm/publish'),
})();

export {};
