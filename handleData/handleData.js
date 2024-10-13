import { calculateHash } from "../hash/calcHash.js";
import { goToPath } from "../navigation/goToPath.js";
import { goUp } from "../navigation/goUp.js";
import { printList } from "../navigation/printList.js";
import { handleOsOperation } from "../systemInfo/systemInfo.js";

export async function handleData (data) {
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

    if (input.startsWith('os --')) {
      const command = input.replace('os --', '').trim()
      handleOsOperation(command)
      return
    }

    if (input.startsWith('hash')) {
      const path = input.replace('hash', '').trim()
      calculateHash(path)
      return
    }

    console.log('Invalid input');
  } catch (err) {
    console.log('Operation failed');
  }
}
