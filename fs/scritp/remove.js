import fs from 'node:fs';

export function remove(filePath) {
  fs.stat(filePath, function (err, stat) {
    if (err != null || stat.isDirectory()) {
      console.log('Operation failed');
      return
    }

    fs.unlink(filePath, () => {
      console.log('Deleted');
    })
  })
}
