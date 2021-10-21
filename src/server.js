'use strict';

const express = require('express');
const { clothes } = require('./models/clothes');
const { food } = require('./models/food');
const { index } = require('./models/index');
const app = express();

app.use(express.json());
// are these correct?
app.use(food);
app.use(clothes);
app.use(index);

// app.use(logger);
// // see above note for variables
// app.use(handle404Error);
// app.use(handle500Error);

app.get('/person', handlePerson);

module.exports = {
  app,
  start: app.listen(3001, () => console.log('Server is up and running!')),
};
