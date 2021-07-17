const chalk = require("chalk");
const getNotes = require("./notes.js");
const msg = getNotes();
console.log(msg);
const log = console.log;

log(chalk.blue.bold.italic.inverse("Error"));
