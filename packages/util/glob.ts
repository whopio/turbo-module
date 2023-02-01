import _glob from "glob";
import { promisify } from "util";
const glob = promisify(_glob);

export default glob;
