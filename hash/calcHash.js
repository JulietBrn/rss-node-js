import { createHash } from 'node:crypto';
import { createReadStream } from 'fs';
import os from 'os';
import path from 'path'
import { createPath } from '../navigation/createPath.js';

export const calculateHash = async (pathForHash) => {
  const filePath = createPath(pathForHash);
  let hash = createHash('sha256');

  const fileStream = createReadStream(filePath);
  fileStream.on('data', (chunk) => {
    hash = hash.update(chunk);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    process.stdout.write(fileHash + os.EOL)
  });

  fileStream.on('error', () => {
    console.log('Operation failed');
  });

};
