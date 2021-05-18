const yargs = require('yargs');
const notes = require('./notes');

yargs.version('2.0.0')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function (argv) {
    const { title, body } = argv;
    notes.addNote(title, body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function (argv) {
    const { title } = argv;
    notes.removeNote(title);
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing commands',
  handler: function () {
    console.log(yargs.argv)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read arguments',
  handler: function () {
    console.log(yargs.argv.title)
  }
})

yargs.parse();
