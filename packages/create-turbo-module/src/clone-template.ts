import fse from "fs-extra";
import { join } from "path";
import { __dirname } from "./dirname";

const cloneTemplate = async (
  out: string,
  replace: Record<string, string>,
  base = join(__dirname, "../template"),
  path = "/"
) => {
  const currentPath = join(base, path);
  const filesAndFolders = await fse.readdir(currentPath);
  await Promise.all(
    filesAndFolders.map(async (fileOrFolder) => {
      const fileOrFolderPath = join(currentPath, fileOrFolder);
      const stats = await fse.stat(fileOrFolderPath);
      if (stats.isDirectory()) {
        await cloneTemplate(out, replace, base, join(path, fileOrFolder));
      } else if (stats.isFile()) {
        const content = await fse.readFile(fileOrFolderPath, {
          encoding: "utf8",
        });
        const updatedContent = Object.keys(replace).reduce((acc, key) => {
          return acc.replaceAll(key, replace[key]);
        }, content);
        const updatedPath = Object.keys(replace).reduce((acc, key) => {
          return acc.replaceAll(key, replace[key]);
        }, join(path, fileOrFolder));
        await fse.outputFile(join(out, updatedPath), updatedContent);
      }
    })
  );
};

export default cloneTemplate;
