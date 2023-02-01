import { match } from "minimatch";
import getFile from "./get-file";

const readCodeOwnersFile = async () => {
  const { content } = await getFile(".github/CODEOWNERS");
  return Buffer.from(content, "base64").toString();
};

const getCodeOwners = async (file: string) => {
  const lines = (await readCodeOwnersFile()).split("\n").map((line) =>
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
