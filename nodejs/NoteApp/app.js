const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
        describe: "Title of note",
        demand: true,
        alias: "t"
      }

const bodyOptions = {
        describe: "Body of note",
        demand: true,
        alias: "b"
      }

const argv = yargs
    .command('add','Add a new note',{
      title: titleOptions,
      body: bodyOptions
    })
    .command('list','List notes')
    .command('read','Read a note',{
      title: titleOptions
    })
    .command('remove','Remove a note',{
      title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

debugger;

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
  	console.log('created')
  	console.log('---')
  	console.log(note)
  } else {
  	    console.log('title taken')
  }
} else if (command === 'list') {
      var allNotes = notes.getAll()
      allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
    	notes.logNote(note)
        console.log(note.body)
    } else {
    	console.log('not found')
    }
} else if (command === 'remove') {
    console.log(notes.removeNote(argv.title));
} else {
  console.log('Command not recognized');
}
