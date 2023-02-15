# @whop-sdk/turbo-module

Action and CLI to help managing public repositories that publish one or more npm packages

## getting started

The easiest way to create a new turbo-module is to use [`create-turbo-module`](https://github.com/whopio/turbo-module/tree/main/packages/create-turbo-module):

NOTE: pnpm is required, so install pnpm if not available yet

```bash
pnpm create turbo-module
```

Follow the instructions given by the CLI.

After a successful install the github repo needs to be configured. Follow the steps outlined in the README of your newly set-up turbo-module

## features

- publish multiple npm packages from the same repository
- release new versions by accepting automatically created PRs
  - after every release there are 2 PRs created, one for a full release and one of a canary release
  - the full release PR can be configured by commenting `/major`, `/minor` or `/patch`
- automatic GitHub release with every npm release
- [`unimported-action`](https://github.com/whopio/unimported-action) installed by default
- repository linting with PR hints

## action `whopio/turbo-module`:

Multi-purpose action - different sub-actions can be invoked via the `action` input

### action: `check`

- finds every package in `packages`
- skips packages unless they specify `private: false`
- `npm view` to get the latest published version
- compares the latest published version against the current version on main
- generates a filter with publishable packages that can be passed to the `turbo` command

- Inputs:
  - token: github access token

### action: `release`

- compares to current state of main to the last release and generates release notes based on the commits since then
- creates a github relase if there is none for the current version

- Inputs:
  - token: github access token
  - version: current version (usually obtained from `check` action)

### action: `sync`

- creates 2 PRs:
  - (turbo-module): release next canary version
  - (turbo-module): release next version
- the severity of the version increase for the `release next version` PR can be controlled through commenting `/patch`, `/minor` or `/major`
  - only code owners of the root package.json can do this
- uses the same logic `release` uses to create previews for the releases
- if there was a release in the workflow the current PRs will be closed and new ones will be opened
- if there was no release the current PRs are updated to accurately preview the release message

- Inputs:
  - token: github access token

### action: `update`

- updates the severity of the version increase of the `release next version` PR based on comments by code owners

- Inputs:
  - token: github access token

## npm package `@whop-sdk/turbo-module`:

### `turbo-module publish`:

- syncs the package.json version to the monorepo root package.json
- updates all workspace dependencies from `workspace:0.0.0` to the root package.json version
- publishes the module using `pnpm publish`
