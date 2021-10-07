const fs = require('fs');
console.log(process.argv);

if (process.argv[2] === 'read') {
  fs.readFile('data.json', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(JSON.parse(data));
  });
}

if (process.argv[2] === 'create') {

  const newNote = {
    nextId: 5,
    notes: {
      1: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
      2: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
      3: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
      4: 'A closure is formed when a function retains access to variables in its lexical scope.'
    }
  };

  // const theNextId = newNote.nextId;
  Object.assign(newNote.notes, { [newNote.nextId]: process.argv[3] });
  newNote.nextId++;

  const data = JSON.stringify(newNote, null, 2);
  console.log('making a new note lol');
  fs.writeFile('data.json', data, err => {
    if (err) {
      console.error(err);
    }
    console.log('data written??');
  });
}
