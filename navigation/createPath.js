import path from 'path'

export function createPath(filePath) {
  const separator =
    filePath.includes('/') ? '/' :
    filePath.includes("\\") ? '\\' : ' '

  const pathToCheck = filePath.split(separator).join(`${path.sep}`)
  const absolutePath = path.isAbsolute(pathToCheck)
    ? pathToCheck
    : path.resolve(process.cwd(), pathToCheck);

  return absolutePath
}
