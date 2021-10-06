const fs = require('fs');

var arr = [];
for (var i = 2; i < process.argv.length; i++) {
  arr.push(process.argv[i]);
}

for (var j = 0; j < arr.length; j++) {
  fs.readFile(arr[j], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
