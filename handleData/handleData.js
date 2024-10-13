import { calculateHash } from "../hash/calcHash.js";
import { goToPath } from "../navigation/goToPath.js";
import { goUp } from "../navigation/goUp.js";
import { printList } from "../navigation/printList.js";
// import os from 'os';

export function handleData (data) {
  // console.log('Вы ввели ', data);
  const input = data.trim();

  if (input === '.exit') {
    process.exit();
  }

  try {
    if (input === 'up') {
      goUp()
      return
    }

    if (input === 'ls') {
      printList()
      return
    }

    if (input.startsWith('cd')) {
      const path = input.replace('cd', '').trim()
      goToPath(path)
      return
    }

    if (input.startsWith('hash')) {
      const path = input.replace('hash', '').trim()
      // console.log(os.homedir());
      calculateHash(path)
      return
    }

    console.log('Invalid input');
  } catch (err) {
    console.log('Operation failed');
  }
}
