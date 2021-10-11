const express = require('express');
const app = express();
const middleware = express.json();
const data = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(middleware);

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const keys in data.notes) {
    arr.push(data.notes[keys]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    Object.assign(data.notes, { [data.nextId]: req.body });
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', stringifyData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.param.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else {
    delete data.notes[req.params.id];
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', stringifyData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });

  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.param.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else {
    req.body.id = parseInt(req.params.id);
    data.notes[req.params.id] = req.body;
    const stringifyData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', stringifyData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
})
;
