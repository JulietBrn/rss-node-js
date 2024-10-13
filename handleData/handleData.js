import { handleFsOperation } from "../fs/handleFsOperation.js";
import { calculateHash } from "../hash/calcHash.js";
import { createPath } from "../navigation/createPath.js";
import { goToPath } from "../navigation/goToPath.js";
import { goUp } from "../navigation/goUp.js";
import { printList } from "../navigation/printList.js";
import { handleOsOperation } from "../systemInfo/systemInfo.js";
import { compress } from "../zip/compress.js";
import { decompress } from "../zip/decompress.js";

export async function handleData (data) {
  const input = data.trim();
  const fsCommands = ['cat', 'add', 'rn', 'cp', 'mv', 'rm']

  if (input === '.exit') {
    process.exit();
  }

  try {
    if (input === 'up') {
      goUp()
      return
    }

    if (fsCommands.some((el) => input.startsWith(el))) {
      handleFsOperation(input)
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

    if (input.startsWith('compress')) {
      const paths = input.replace('compress', '').trim()
      const pathFrom = createPath(paths.split(' ')[0])
      const pathTo = createPath(paths.split(' ')[1])

      compress(pathFrom, pathTo)
      return
    }

    if (input.startsWith('decompress')) {
      const paths = input.replace('decompress', '').trim()
      const pathFrom = createPath(paths.split(' ')[0])
      const pathTo = createPath(paths.split(' ')[1])

      decompress(pathFrom, pathTo)
      return
    }

    console.log('Invalid input');
  } catch (err) {
    console.log('Operation failed:', err.message);
  }
}
