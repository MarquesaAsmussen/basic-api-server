'use strict';

const express = require('express');
const { phrses } = require('../model');
const app = express();

app.use(express.json());
app.use(logger);
// see above note for variables
app.use(handle404Error);
app.use(handle500Error);

app.get('/person', handlePerson);

// this function needs work
function handlePerson(req, res) {
  let { person } = request.body;
  // need to bring in validator here

  // need to create a place to push this to
  people.push(person);

  response.send(person);
}

module.exports = {
  app,
  start: app.listen(3001, () => console.log('Server is up and running!')),
};
