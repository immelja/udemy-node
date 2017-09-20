// var obj = {
// 	name: 'jaco'
// }

// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)
// console.log(obj)

const fs = require('fs')

var originalNote = {
	title: 'some title',
	body: 'some body'
}

originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString)

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(note)