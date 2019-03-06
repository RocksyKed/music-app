const bcrypt = require('bcrypt');
const moment = require('moment');

const User = require('../models/user');
const auth = require('../services/auth');

const SALT_ROUNDS = 10;

const registrateUser = (req, res) => {
  bcrypt.hash(req.body.password, SALT_ROUNDS)
    .then(hashPassword => {
      const userObj = {
        email: req.body.email,
        password: hashPassword,
        username: req.body.username,
        avatar: req.body.avatar,
        birthDate: moment(req.body.birthDate).toISOString(),
        registrationDate: moment().toISOString(),
        genres: req.body.genres
      };

      return User.create(userObj)
    })
    .then(user => {
      const token = auth.signToken(user._id);

      const userObj = {
        user,
        token
      };

      res.status(200).send(userObj);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error occurs in registration process');
    });
};

module.exports = {
  registrateUser
};