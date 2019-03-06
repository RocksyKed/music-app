const { Router } = require('express');

const userController = require('./controllers/user');

const router = Router();

router.get('*', (req, res) => {
  res.send('Works');
});

router.post('/users', userController.registrateUser);

module.exports = router;