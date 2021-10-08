const express = require('express');
const app = express();
const middleware = express.json();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

let nextId = 1;
const grades = {};

app.use(middleware, function (req, res, next) {
  next();
});

const arr = [];
app.get('/api/grades', function (req, res) {
  for (const keys in grades) {
    arr.push(grades[keys]);
  }
  res.json(arr);
});

app.post('/api/grades', function (req, res) {
  const newInput = req.body;
  newInput.id = nextId;
  nextId++;
  res.status(201).send(newInput);
  arr.push(newInput);
});
