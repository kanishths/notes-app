const { argv } = require("yargs");
const yargs = require("yargs");
const { readNote } = require("./notes.js");
const notes = require("./notes.js");

//  Customize yargs version
yargs.version("1.1.0");

//  Create ADD command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create REMOVE command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create LIST command
yargs.command({
  command: "list",
  describe: "List all note",
  handler() {
    notes.listNote();
  },
});

// Create READ command
yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//Parsing Yargs
yargs.parse();
