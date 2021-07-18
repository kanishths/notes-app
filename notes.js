const chalk = require("chalk");
const fs = require("fs");

//ADD NOTES FUNCTION
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added to the List"));
  } else {
    console.log(chalk.red("Note Title Already Taken"));
  }
};

//REMOVE NOTE FUNCTION
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length === notes.length) {
    console.log(chalk.bgRed.black("No Note found!"));
  } else {
    console.log(chalk.bgGreen.black("Note Removed from the List!"));
    saveNotes(notesToKeep);
  }
};

//LIST NOTES FUNCTION
const listNote = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.bgBlue.black.bold("Your Notes: "));
    notes.forEach((note) => console.log(chalk.yellow(note.title)));
  } else {
    console.log(chalk.bgRed.black("No Notes Found!"));
  }
};

//READ NOTE FUNCTION
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.blue.bold(note.title), ":", note.body);
  } else {
    console.log(chalk.bgRed.black("Note not found!"));
  }
};

//SAVE NOTES HELPER FUNCTION
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//LOADING NOTES HELPER FUNCTION
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//EXPORTING ALL MODULES
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
