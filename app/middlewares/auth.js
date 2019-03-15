const authService = require('../services/auth');
const AuthError = require('../errors/authError');
const User = require('../models/user');

const verifyUser = (req, res, next) => {
  const token = (req.headers['authorization'] || '').split(' ')[1];

  if (!token) {
    return Promise.reject(new AuthError({ message: 'No token provided' }));
  } else {
    return authService.verifyToken(token)
      .then(({ id }) => User.findById(id).lean())
      .then(user => {
        req.user = user;
        next();
      })
      .catch(next)
  }
};

module.exports = verifyUser;
