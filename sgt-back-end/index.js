const pg = require('pg');
const express = require('express');
const app = express();
// const middleware = express.json();
// const data = require('./data.sql');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
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
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
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
        res.status(404).json({
          error: 'Cannot find "grades" table'
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// app.post('/api/notes', (req, res) => {
//   if (!req.body) {
//     res.status(400).json({ error: 'content is a required field' });
//   } else {
//     Object.assign(data.notes, { [data.nextId]: req.body });
//     data.notes[data.nextId].id = data.nextId;
//     data.nextId++;
//     const stringifyData = JSON.stringify(data, null, 2);
//     fs.writeFile('data.json', stringifyData, err => {
//       if (err) {
//         res.status(500).json({ error: 'An unexpected error occurred.' });
//       } else {
//         res.status(201).send(req.body);
//       }
//     });
//   }
// });

// app.post('/api/grades', (req, res) => {
//    if (!req.body) {
//     res.status(400).json({ error: 'content is a required field' });
//   } else {
//     res.status(200).json({ error: 'hehh' });}
//     const values = req.body;
//    const sql =  `insert into "grades" ("name", "course", "score")
// values ('Simon Peyton Jones', 'Haskell', 100)`;
// db.query(sql, params)
//     .then(result => {
//       const grade = result.rows[0];
//       if (!grade) {
//         res.status(404).json({
//           error: `Cannot find grade with "gradeId" ${gradeId}`
//         });
//       } else {
//         res.json(grade);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({
//         error: 'An unexpected error occurred.'
//       });
//     });
//   next();
// });
