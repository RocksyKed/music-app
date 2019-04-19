const url = require('url');

const playlistService = require('../services/playlist');

const addPlaylist = (req, res, onError) => {
  const playlistObjData = {
    data: req.body,
    userId: req.user._id,
    ...(
      req.file && {
        filename: req.file.filename,
        uploadsPath: url.format({
          protocol: req.protocol,
          host: req.get('host'),
          pathname: '/uploads'
        })
      }
    )
  };

  playlistService.addPlaylist(playlistObjData)
    .then(playlist => res.json(playlist))
    .catch(onError)
};

const getPlaylists = (req, res, onError) => {
  playlistService.getPlaylists(req.user._id)
    .then(playlists => {
      const uploadPath = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: '/uploads'
      });
      const playlistData = playlists.map(
        item => ({
          ...item,
          ...(
            item.cover &&
            {
              coverUrl: `${uploadPath}/${item.cover}`
            }
          )
        })
      );
      res.json(playlistData)
    })
    .catch(onError)
};

const deletePlaylist = (req, res, onError) => {
  playlistService.deletePlaylist(req.params.playlistId, req.user._id)
    .then(_ => res.status(200).send())
    .catch(onError)
};

module.exports = {
  addPlaylist,
  getPlaylists,
  deletePlaylist
};
