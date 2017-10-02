const fs = require('fs');

var fetchNotes = () => {
try {
    var notesString = fs.readFileSync('standard.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []
  }
}

console.log(fetchNotes())