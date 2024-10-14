
import os from 'os';

export function handleOsOperation(command) {
  if (command === 'EOL' ) {
    console.log(JSON.stringify(os.EOL));
  } else if (command === 'cpus') {
    const cpus = os.cpus();
    console.log(`Total CPUs: ${cpus.length}`);

    cpus.forEach((cpu, index) => {
      console.log(`CPU ${index + 1}: ${cpu.model.trim()}, ${cpu.speed / 1000} GHz`);
    });
  } else if (command === 'homedir') {
    console.log(os.homedir());
  } else if (command === 'username') {
    console.log(os.userInfo().username);
  } else if (command === 'architecture') {
    console.log(os.arch());
  } else {
    console.log('Operation failed');
  }
}
