const express = require('express');
const router = require('./router');
const errorHandler = require('./middlewares/error');

const app = express();

const globalMiddlewares = [
  express.json(),
  express.urlencoded({ extended: true })
];

app.use(globalMiddlewares);
app.use('/api', router);
app.use(errorHandler);

module.exports = app;
