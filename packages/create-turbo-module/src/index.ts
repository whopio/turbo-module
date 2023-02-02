#!/usr/bin/env node

/**
 * @credit https://github.com/vercel/turbo/blob/main/packages/create-turbo/src/index.ts
 */

import { bash } from "@local/util/exec";
import chalk from "chalk";
import fse from "fs-extra";
import { createPromptModule } from "inquirer";
import ora from "ora";
import { relative, resolve } from "path";
import cloneTemplate from "./clone-template";
import getVersion from "./get-version";

const inquirer = createPromptModule();

const main = async () => {
  const projectName = (
    await inquirer<{ name: string }>([
      {
        type: "input",
        name: "name",
        message: "What would you like to name your turbo-module?",
        default: "my-turbo-module",
      },
    ])
  ).name;
  const projectDir = resolve(process.cwd(), projectName);

  // Create the app directory
  const relativeProjectDir = relative(process.cwd(), projectDir);
  const projectDirIsCurrentDir = relativeProjectDir === "";
  if (!projectDirIsCurrentDir) {
    if (
      fse.existsSync(projectDir) &&
      fse.readdirSync(projectDir).length !== 0
    ) {
      console.log(
        `️🚨 Oops, "${relativeProjectDir}" already exists. Please try again with a different directory.`
      );
      process.exit(1);
    } else {
      fse.mkdirSync(projectDir, { recursive: true });
    }
  }

  await cloneTemplate(projectDir, {
    $$NAME: projectName,
    $$VERSION: await getVersion(),
    $$GITHUB_USER: (
      await inquirer<{ github_user: string }>([
        {
          type: "input",
          name: "github_user",
          message: "What is your github username?",
        },
      ])
    ).github_user,
  });

  console.log();
  console.log(`>>> Created a new turbo-module with the following:`);
  console.log();
  console.log(
    ` - ${chalk.bold(
      `packages/${projectName}`
    )}: Typescript module built with swc`
  );
  console.log(
    ` - ${chalk.bold(
      "packages/eslint-config-custom"
    )}: Shared configuration (ESLint)`
  );
  console.log(
    ` - ${chalk.bold("packages/tsconfig")}: Shared TypeScript \`tsconfig.json\``
  );
  console.log();

  const spinner = ora({
    text: "Installing dependencies...",
    spinner: {
      frames: ["   ", ">  ", ">> ", ">>>"],
    },
  }).start();
  await bash.options({ cwd: projectDir })`
    pnpm i
    git init
    git checkout -b main
    git add -A
    git commit -m "initial commit from create-turbo-module"
  `;
  spinner.stop();
  console.log(`${chalk.bold(">>> Success!")} Your turbo-module is ready.`);
};

main();
