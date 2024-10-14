import fs from 'node:fs';

export function create (filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.log('Operation failed');
    }
  })
}
