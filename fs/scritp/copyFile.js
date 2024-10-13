import { pipeline } from 'stream'
import { createWriteStream, createReadStream} from 'fs';
import path from 'path';
import fs from 'fs';

export function copyFile (pathFrom, pathTo, callback) {
  fs.stat(pathFrom, (err, stats) => {
    if (err || !stats.isFile()) {
      console.log('Operation failed');
      return;
    }

    fs.stat(pathTo, (err, stats) => {
      if (!err && stats.isDirectory()) {
        const fileName = path.basename(pathFrom);
        pathTo = path.join(pathTo, fileName);
      }

      const readStream = createReadStream(pathFrom)
      const writeStream = createWriteStream(pathTo)

      pipeline(
        readStream,
        writeStream,
        (err) => {
          if(err) {
            console.log('Operation failed', err.message)
          } else {
            callback(null);
          }
        }
      )
    })
  })
}
