import { printCurrentPath } from "../navigation/path.js";

export let userName = ''

export function getUserName() {
  const argsArray = process.argv.slice(2).filter(el => el.includes('username'))
  userName = argsArray.flat().join('').split('=')[1];
};

export function greeting() {
  console.log(`Welcome to the File Manager, ${userName}!`);
  printCurrentPath()
}
