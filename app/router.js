const { Router } = require('express');

const userController = require('./controllers/user');
const playlistController = require('./controllers/playlist');
const authRequired = require('./middlewares/auth');
const upload = require('./middlewares/upload');

const router = Router();

router.get('/users/me', authRequired, userController.getCurrentUser);
router.post('/users', userController.registrateUser);
router.get('/users/deezer-confirm', userController.deezerConfirm);

router.post('/playlists', authRequired, upload.single('cover'), playlistController.addPlaylist);
router.get('/playlists', authRequired, playlistController.getPlaylists);
router.delete('/playlist/:playlistId', authRequired, playlistController.deletePlaylist);
router.get('/playlists/user/search', authRequired, playlistController.searchPlaylists);

router.post('/login', userController.login);

module.exports = router;
