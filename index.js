import * as greeting from "./greeting/greeting.js";
import { sayBye }  from "./greeting/bye.js";
import { handleData } from "./handleData/handleData.js";
import { printCurrentPath } from "./navigation/path.js";

function startFileManager() {
  greeting.getUserName();
  greeting.greeting();

  process.stdin.on('data', (data) => {
    handleData(data.toString())
    printCurrentPath()
  });

  process.on('SIGINT', () => {
    process.exit();
  });

  process.on('exit', () => {
    sayBye()
  });
}

startFileManager();