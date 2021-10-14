const pg = require('pg');
const express = require('express');
const app = express();
const middleware = express.json();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(middleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(500).json({ error: 'Cannot find "grades" table' });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0 to 100' });
    return;
  }
  const { name, course, score } = req.body;
  const sql = {
    text: 'insert into "grades"("name", "course", "score") values($1, $2, $3) returning *',
    params: [name, course, score]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(400).json({ error: 'invalid grade' });
      } else {
        res.status(201).send(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  if (!req.body) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  const { name, course, score } = req.body;
  const sql = {
    text: 'update "grades" set "name" = $1, "course" = $2, "score" = $3 where "gradeId" = $4 returning *',
    params: [name, course, score, gradeId]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(400).json({ error: 'invalid grade' });
      } else {
        res.status(200).send(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  const sql = {
    text: 'delete from "grades" where "gradeId" = $1 returning *',
    params: [gradeId]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: 'grade does not exist in database' });
      } else {
        res.status(204).send(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});
