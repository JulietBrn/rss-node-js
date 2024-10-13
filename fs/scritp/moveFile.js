import { copyFile } from './copyFile.js';
import { remove } from './remove.js';

export function moveFile (pathFrom, pathTo) {
  copyFile(pathFrom, pathTo, (err) => {
    if (!err) {
      remove(pathFrom)
    }
  })
}
