const express = require('express');
const app = express();
const data = require('./data.json');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', function (req, res) {
  const arr = [];
  for (const keys in data.notes) {
    arr.push(data.notes[keys]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', function (req, res) {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});
