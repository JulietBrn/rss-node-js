import fs from 'node:fs';
import { join } from 'path';

export function printList () {

  const folderPath = process.cwd();

    fs.readdir(folderPath, (err, items) => {
      if (err) {
        console.log('Operation failed');
        return;
      }

      const folders = [];
      const files = [];

      items.forEach((item) => {
        const filePath = join(folderPath, item)

        fs.stat(filePath, (err, stat) => {
          if (err) {
            console.log('Operation failed');
            return;
          }

          if (stat.isDirectory()) {
            folders.push({ Name: item, Type: 'directory' });
          } else if (stat.isFile()) {
            files.push({ Name: item, Type: 'file' });
          }

          if (folders.length + files.length === items.length) {
            const sortedFolders = folders.sort((a, b) => a.Name > b.Name ? 1 : -1)
            const sortedFiles = files.sort((a, b) => a.Name > b.Name ? 1 : -1)
            console.table([...sortedFolders, ...sortedFiles])
          }
        })

    })
  })
}
