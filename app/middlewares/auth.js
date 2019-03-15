const jwt = require('jsonwebtoken');

const auth = require('../services/user');

const verifyUser = (req, res, next) => {
  const token = (req.headers['Authorization'] || '').split(' ')[1];

  if (!token) {
    res.status(401).send({ auth: false, message: 'No token provided' });
  }

};

module.exports = {
  verifyUser
};
