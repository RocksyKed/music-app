const express = require('express');
const router = require('./router');

const app = express();

const globalMiddlewares = [
  express.json(),
  express.urlencoded({ extended: true })
];

app.use(globalMiddlewares);
app.use('/api', router);

module.exports = app;
