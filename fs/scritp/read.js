import fs from 'node:fs';
import os from 'os';

export function read (filePath) {
  const fileStream = fs.createReadStream(filePath)

  fileStream.on('data', (chunk) => {
    process.stdout.write(chunk + os.EOL)
  })

  fileStream.on('error', () => {
    console.log('Operation failed');
    return
  })
}