import fse from "fs-extra";
import { join } from "path";
import { __dirname } from "./dirname";

const getVersion = async () => {
  const { version } = (await fse.readJson(
    join(__dirname, "../package.json")
  )) as { version: string };
  return version;
};

export default getVersion;
