const fs = require('fs');
const chalk = require('chalk');

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>  {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (err) {
    console.log(chalk.bgRedBright('Something went wrong. Most probably, file is missing'))
    return [];
  }
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find(note => note.title === title);
  if (!duplicate) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen('Note added'))
  } else {
    console.log(chalk.bgRedBright('Note title is taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find(note => note.title === title);
  if (targetNote) {
    const notesToEdit = notes.filter(note => note.title !== title);
    saveNotes(notesToEdit);
    console.log(chalk.bgGreen('Note is removed'));
  } else {
    console.log(chalk.bgRedBright('Note doesn`t exist'))
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blueBright('Your notes'));
  console.table(notes)
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (notep) {
    console.log(chalk.bgBlue(note.title));
    console.log(chalk.bgGreen(note.body));
  } else {
    console.log(chalk.bgRed('There is no such a note'))
  }
}

module.exports = {addNote, removeNote, listNotes, readNote};
