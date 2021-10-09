const express = require('express');
const app = express();
// const middleware = express.json();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const keys in grades) {
    arr.push(grades[keys]);
  }
  res.json(arr);
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

// let nextId = 1;
// const grades = {};

// app.use(middleware, function (req, res, next) {
//   next();
// });

// app.post('/api/grades', function (req, res) {
//   req.body.id = nextId;
//   res.status(201).send(req.body);
//   grades[nextId] = req.body;
//   nextId++;
// });
