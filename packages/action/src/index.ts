import { getInput } from '@actions/core';

const action = getInput('action', { required: true });

switch (action) {
  case 'check': {
    import('./check').then(({ default: check }) => check());
    break;
  }
  case 'release': {
    import('./release').then(({ default: release }) => release());
    break;
  }
  case 'sync': {
    import('./sync').then(({ default: sync }) => sync());
    break;
  }
  case 'update': {
    import('./release-pull/type').then(({ default: update }) => update());
    break;
  }
  default: {
    throw new Error('Invalid argument for `action`');
  }
}
