const userInput = process.argv.slice(2);

const timer = userInput => {


  for (const timer of userInput) {
    if (timer < 0 || isNaN(timer)) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, (timer * 1000));
  }
};

timer(userInput);