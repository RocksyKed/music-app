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

module.exports = {
  addPlaylist
};
