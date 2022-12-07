const addNotes = require('./notes.js')

const mssge = addNotes()

console.log(mssge)

const chalk = require('chalk')
console.log(chalk.bold.green("Success"))
