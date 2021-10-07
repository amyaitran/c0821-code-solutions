const fs = require('fs');
const JSONdata = require('./data.json');

console.log(process.argv);

if (process.argv[2] === 'read') {
  console.log(JSONdata);
}

if (process.argv[2] === 'create') {
  Object.assign(JSONdata.notes, { [JSONdata.nextId]: process.argv[3] });
  JSONdata.nextId++;

  const stringifyData = JSON.stringify(JSONdata, null, 2);
  fs.writeFile('data.json', stringifyData, err => {
    if (err) {
      console.error(err);
    }
  });
}

if (process.argv[2] === 'update') {
  const notesId = process.argv[3];
  const notesUpdate = process.argv[4];
  JSONdata.notes[notesId] = notesUpdate;

  const stringifyData = JSON.stringify(JSONdata, null, 2);
  fs.writeFile('data.json', stringifyData, err => {
    if (err) {
      console.error(err);
    }
  });
}

// delete 1
if (process.argv[2] === 'delete') {
  for (const keys in JSONdata) {
    console.log(JSONdata[keys]);
    if (JSONdata[keys] === process.argv[3]) {
      delete JSONdata.keys;
    }
  }
}
