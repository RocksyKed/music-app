const { Router } = require('express');

const userController = require('./controllers/user');
const playlistController = require('./controllers/playlist');
const authRequired = require('./middlewares/auth');
const upload = require('./middlewares/upload');

const router = Router();

router.get('/users/me', authRequired, userController.getCurrentUser);
router.post('/users', userController.registrateUser);

router.post('/playlists', authRequired, upload.single('cover'), playlistController.addPlaylist);

router.post('/login', userController.login);

module.exports = router;
