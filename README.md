# @whop-sdk/turbo-module

CLI for helping with publishing npm packages in a monorepo environment.

## install

To use the action related commands the package needs to be installed at the root of your repo and each package that uses the npm scripts needs to also install this package:

```
pnpm add @whop-sdk/turbo-module -D --filter "root-package-name" --filter "other-package-name"
```

for this repo it would be: `pnpm add @whop-sdk/turbo-module -D --filter package-monorepo --filter package`. This would install it in both the root as well as in `packages/package`

## important

- the source of the version of any package published by this is the version in the root package.json of the repo
- this expects every workspace package to be version 0.0.0 and to be referenced with workspace:0.0.0 in the package.json.
- This cli is intended to be used together with turborepo
- The github release feature requires sqash merging PRs

## commands

- `turbo-module npm can-publish` (action): checks all public packages in the /packages folder against their most recent version available on npm, if the repos version is larger than the npm version it gets added to a list of packages to be published. it also sets the `can-publish` output to `true` if there are publishable packages as well as sets the `version` output to the package version for later use.

  #### Outputs:

  - `can-publish ("true" | "false")`: Inidcates if any packages in the repo can be published
  - `filter (string)`: A filter string to be used to scope the turbo release flow to only consider publishable packages.
  - `version (string)`: The version that will be released

- `turbo-module npm publish` (npm script): Reads the root package.json version and replaces the cwd package.json version with that. Also replaces the version of any workspace package referenced in the (peer)dependencies of the cwd package.json with the current version.

- `turbo-module github release` (action): This collects all commits since the last release, gets the associated PR and uses that data to create release messages.

  #### env:

  - `GITHUB_TOKEN`: Github token
  - `VERSION`: The release version
  - `INITIAL_COMMIT`: The initial commit that should be considered for changelogs

## release action example

```yml
on:
  push:
    branches:
      - main

name: Build, test, release

jobs:
  turbo:
    name: Publish to npm and release on github
    runs-on: ubuntu-latest
    env:
      TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
      TURBO_TEAM: ${{ secrets.TURBO_TEAM }}
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7.13.6
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16
          check-latest: true
          cache: pnpm
      - name: Install all packages
        run: pnpm i
      - name: Check package.json for version increase
        id: check
        run: pnpm turbo-module npm can-publish
      - run: echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc
        if: steps.check.outputs.can-publish == 'true'
        env:
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
      - name: Run turbo release flow
        run: pnpm turbo release ${{ steps.check.outputs.filter }}
        if: steps.check.outputs.can-publish == 'true'
      - name: Github Release
        run: pnpm turbo-module github release
        if: steps.check.outputs.can-publish == 'true'
        env:
          GITHUB_TOKEN: ${{ github.token }}
          VERSION: ${{ steps.check.outputs.version }}
```

Note: `turbo-module npm publish` is executed in the turbo release flow through each packages `release` npm script.

## todo

this is very static right now as all the repos this is used in at the moment are very similar in their structure
