import * as config from "config";
import { run, ConfigI } from "shell-ts";

const _config = config as unknown;
const myConfig = _config as ConfigI;
const shellPath = (__dirname + "/" + myConfig.shellPath) as string;

try {
  run(shellPath, myConfig);
} catch (error) {
  console.error(error);
}
