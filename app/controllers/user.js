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

module.exports = {
  registrateUser,
  login
};
