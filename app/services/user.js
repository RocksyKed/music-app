const lodash = require('lodash');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const AuthError = require('../errors/authError');
const { signToken } = require('./auth');
const ClientError = require('../errors/clientError');

const SALT_ROUNDS = 10;

const createUser = user =>
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
    .catch(err => {
      if (err && err.code && err.code === 11000)
      return Promise.reject(new ClientError({ message: 'User with this email already exist' }));
    });

const loginUser = ({ email, password }) =>
  User.findOne({ email }).select('+password').lean()
    .then(user => {
      if (!user) {
        return Promise.reject(
          new AuthError({ message: 'Email or password is invalid' })
        );
      }

      const isPasswordTrueP = bcrypt.compare(password, user.password);

      return Promise.all([ user, isPasswordTrueP ])
    })
    .then(([ user, isPasswordTrue ]) => {
      if (!isPasswordTrue) {
        return Promise.reject(
          new AuthError({ message: 'Email or password is invalid' })
        );
      } else {
        const userToSent = lodash.omit(user, ['password']);

        return Promise.all([ userToSent, signToken(user._id) ])
      }
    })
    .then(([user, accessToken]) => ({
      user,
      accessToken
    }));

module.exports = {
  createUser,
  loginUser
};
