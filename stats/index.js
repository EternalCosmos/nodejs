const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');

const timeCount = (time) => {
  const timeValues = time.split(':');
  const hrs = parseInt(timeValues[0], 10);
  const mins = parseInt(timeValues[1], 10);
  const secs = parseInt(timeValues[2], 10);

  const currentStats = JSON.parse(fs.readFileSync('time.json').toString());
  let { hours, minutes, seconds } = currentStats;

  seconds += secs;
  if (seconds >= 60) {
    seconds = seconds % 60;
    minutes++;
  }
  
  minutes += mins;
  if (minutes >= 60) {
    minutes = minutes % 60;
    hours++;
  }

  hours += hrs;

  const newStats = {hours, minutes, seconds};
  fs.writeFileSync('time.json', JSON.stringify(newStats));
  console.log(chalk.cyan(`You've done ${hours}:${minutes}:${seconds} of 35:04:04`))
}

yargs.command({
  command: 'log',
  describe: 'Log learned time',
  builder: {
    time: {
      describe: 'Time spend learning NodeJs',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    const { time } = argv;
    timeCount(time);
  }
})

yargs.parse();

/*
  TODO:
    1. Check for data and file existance
    2. Show number of vids left
    3. Show time left
    4. Format output data
*/ 
