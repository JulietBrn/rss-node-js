import process from 'process';
import { createPath } from './createPath.js';

export function goToPath(pathToGo) {
  const dir = createPath(pathToGo)
  process.chdir(dir);
}
