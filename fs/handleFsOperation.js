import fs from 'node:fs';
import path from 'path';
import { createPath } from "../navigation/createPath.js";
import { remove } from './scritp/remove.js';
import { read } from './scritp/read.js';
import { create } from './scritp/create.js';
import { rename } from './scritp/rename.js';
import { copyFile } from './scritp/copyFile.js';
import { moveFile } from './scritp/moveFile.js';

export function handleFsOperation(input) {
  if (input.startsWith('rm')) {
    const path = input.replace('rm', '').trim()
    const filePath = createPath(path)

    remove(filePath)
  }

  if (input.startsWith('cat')) {
    const path = input.replace('cat', '').trim()
    const filePath = createPath(path)

    read(filePath)
  }

  if (input.startsWith('add')) {
    const fileName = input.replace('add', '').trim()
    const filePath = path.join(process.cwd(), fileName)

    create(filePath)
  }

  if (input.startsWith('rn')) {
    const fileName = input.replace('rn', '').trim()
    const filePath = createPath(fileName.split(' ')[0])
    const newFileName = fileName.split(' ')[1]

    rename(filePath, newFileName)
  }

  if (input.startsWith('cp')) {
    const fileName = input.replace('cp', '').trim()
    const filePath = createPath(fileName.split(' ')[0])
    const newFilePath = createPath(fileName.split(' ')[1])

    copyFile(filePath, newFilePath)
  }

  if (input.startsWith('mv')) {
    const fileName = input.replace('mv', '').trim()
    const filePath = createPath(fileName.split(' ')[0])
    const newFilePath = createPath(fileName.split(' ')[1])

    moveFile(filePath, newFilePath)
  }
}
