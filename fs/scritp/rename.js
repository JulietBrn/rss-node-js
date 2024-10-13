import fs from 'node:fs';
import path from 'path';

export function rename(filePath, newFileName) {
  const newFilePath = path.join(filePath, '..', newFileName);

  fs.stat(filePath, function (err) {
    if (err != null) {
      console.log('Operation failed');
      return
    }

    fs.stat(newFilePath, function (err) {
      if (err == null) {
        console.log('Operation failed');
        return
      }

      fs.rename(filePath, newFilePath, (renameErr) => {
        if (renameErr) {
          console.log('Operation failed');
        }
        console.log('Rename success');
      });
    });
  });
}
