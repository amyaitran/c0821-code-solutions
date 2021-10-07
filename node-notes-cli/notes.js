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
