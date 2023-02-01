import { match } from "minimatch";
import { readFile } from "../../util/fse";

const reacCodeOwnersFile = async () => {
  return await readFile(".github/CODEOWNERS", { encoding: "utf-8" });
};

const getCodeOwners = async (file: string) => {
  const lines = (await reacCodeOwnersFile()).split("\n").map((line) =>
    line
      .split(" ")
      .map((part) => part.trim())
      .filter(Boolean)
  );
  let owners: string[] = [];
  for (const [pattern, ...codeowners] of lines) {
    if (!pattern) continue;
    if (pattern === "*") owners = codeowners;
    else if (match([file], pattern).length) owners = codeowners;
  }
  return owners;
};

export default getCodeOwners;
