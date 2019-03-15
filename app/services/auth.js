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
      .then((accessToken, err) => {
        if (err) {
          return Promise.reject(new AuthError({ message: 'Token is invalid' }));
        } else {
          return accessToken
        }
      });

module.exports = {
  signToken,
  verifyToken
};