const fs = require('fs');

var randomNum = Math.floor(Math.random() * 100);

fs.writeFile('random.txt', randomNum.toString(), err => {
  if (err) {
    console.error(err);
  }
});
