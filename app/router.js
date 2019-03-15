const { Router } = require('express');

const userController = require('./controllers/user');
const authRequired = require('./middlewares/auth');

const router = Router();

router.get('/', (req, res) => {
  res.send('Works');
});

router.post('/users', userController.registrateUser);

router.post('/login', userController.login);

module.exports = router;
