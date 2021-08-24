const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdout.write(`Welcome to Timer 2.0!
Press 'b' to beep instantly.
Input any number from 1-9 and the alarm will beep after that number of seconds.
Press 'ctrl + c' to exit the program.
`);

stdin.on('data', (key) => {
  if (key === 'b')
    process.stdout.write('\x07');

  if (key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    let iteration = Number(key);
    console.log(iteration);

    const interval = setInterval(() => {
      iteration--;
      console.log(iteration);
      if (iteration === 0) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, (key * 1000));
  }

  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao! \n`);
    process.exit();
  }
});


