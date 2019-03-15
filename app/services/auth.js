const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { SECRET } = require('../config');
const AuthError = require('../errors/authError');

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

const signToken =
  id =>
    sign({ id }, SECRET);

const verifyToken =
  token =>
    verify(token, SECRET)
      .catch(err => Promise.reject(new AuthError({ message: 'Token is invalid' })));

module.exports = {
  signToken,
  verifyToken
};