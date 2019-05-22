const path = require('path');
const express = require('express');

const app = express();

app.use(
  express.static(path.resolve('./build'))
);

app.get('/api/test', (req, res) => {
  res.json({ hello: 'world!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
