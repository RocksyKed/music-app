const lodash = require('lodash');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const ClientError = require('../errors/clientError');
const { signToken } = require('./auth');

const SALT_ROUNDS = 10;

const createUser = user => (
  bcrypt.hash(user.password, SALT_ROUNDS)
    .then(hashPassword => {
      const userObj = {
        email: user.email,
        password: hashPassword,
        username: user.username
      };

      return User.create(userObj)
    })
    .then(user => {
      const tokenP = signToken(user._id);
      const userToSent = lodash.omit(user.toJSON(), ['password']);

      return Promise.all([ userToSent, tokenP ])
    })
    .then(([ user, accessToken]) => ({
      user,
      accessToken
    }))
);

const loginUser = ({ email, password }) => (
  User.findOne({ email }).select('+password').lean()
    .then(user => {
      const isPasswordTrueP = bcrypt.compare(password, user.password);

      return Promise.all([ user, isPasswordTrueP ])
    })
    .then(([ user, isPasswordTrue ]) => {
      if (!isPasswordTrue) {
        return Promise.reject(
          new ClientError({ message: 'Email or password is invalid' })
        );
      } else {
        const userToSent = lodash.omit(user, ['password']);

        return Promise.all([ userToSent, signToken(user._id) ])
      }
    })
    .then(([user, accessToken]) => ({
      user,
      accessToken
    }))
);

module.exports = {
  createUser,
  loginUser
};
