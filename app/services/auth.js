const jwt = require('jsonwebtoken');

const { SECRET_WORD } = require('../config');

const signToken = id => (
  jwt.sign({ id }, SECRET_WORD)
);

const verifyToken = token => (
  jwt.verify(token, SECRET_WORD)
    .catch(err => {
      console.error((err), 'Failed to authenticate token');
      return err
    })
);

module.exports = {
  signToken,
  verifyToken
};