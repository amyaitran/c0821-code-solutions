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

app.get('/api/grades', function (req, res) {
  const arr = [];
  for (const keys in grades) {
    arr.push(grades[keys]);
  }
  res.json(arr);
});

app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  res.status(201).send(req.body);
  grades[nextId] = req.body;
  nextId++;
});
