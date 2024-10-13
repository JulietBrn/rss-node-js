import { calculateHash } from "../hash/calcHash.js";
import { goToPath } from "../navigation/goToPath.js";
import { goUp } from "../navigation/goUp.js";
// import os from 'os';

export function handleData (data) {
  // console.log('Вы ввели ', data);

  if (data.includes('.exit')) {
    process.exit();
  }

  try {
    if (data.startsWith('up')) {
      goUp()
      return
    }

    if (data.startsWith('cd')) {
      const path = data.replace('cd', '').trim()
      goToPath(path)
      return
    }

    if (data.startsWith('hash')) {
      const path = data.replace('hash', '').trim()
      // console.log(os.homedir());
      calculateHash(path)
      return
    }

    console.log('Invalid input');
  } catch (err) {
    console.log('Operation failed');
  }
}
