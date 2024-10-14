import path from 'path';
import process from 'process';

export function goUp() {
  const parentDir = path.join(process.cwd(), '..');
  process.chdir(parentDir);
}
