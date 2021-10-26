const express = require('express');
const path = require('path');
const app = express();

const dir = path.join(__dirname, '/public');

const middleware = express.static(dir);

app.use(middleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
