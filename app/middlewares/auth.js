const jwt = require('jsonwebtoken');

const auth = require('../services/auth');

const verifyUser = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(401).send({ auth: false, message: 'No token provided' });
  }

};

module.exports = {
  verifyUser
};