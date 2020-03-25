const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.static('client'));

app.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log('id received is 1');
  res.send("hey there");
});

app.listen(port, () => {
  console.log(`Express server for item detail now listening on port ${port}`);
});
