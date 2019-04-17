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

const deezerConfirm = (req, res, onError) => {
  console.log(req);
};

module.exports = {
  registrateUser,
  login,
  getCurrentUser,
  deezerConfirm
};
