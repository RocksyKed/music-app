const userService = require('../services/user');

const registrateUser = (req, res, onError) => {
  userService.createUser(req.body)
    .then(user => res.json(user))
    .catch(onError);
};

const login = (req, res, onError) => {
  userService.loginUser(req.body)
    .then(user => res.json(user))
    .catch(onError);
};

const getCurrentUser = (req, res) => {
  res.json(req.user);
};

module.exports = {
  registrateUser,
  login,
  getCurrentUser
};
