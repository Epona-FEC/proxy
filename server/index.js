const express = require('express');
const morgan = require('morgan');
// const pug = require('pug');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('client'));

app.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id received is ${id}`);
  res.render('index', { productId: id });
});

app.listen(port, () => {
  console.log(`Express proxy server for etsy item detail now listening on port ${port}`);
});
