const Playlist = require('../models/playlist');

const addPlaylist = ({ data, userId, filename, uploadsPath }) => {
  const playlistData = {
    creatorId: userId,
    name: data.name,
    isPrivate: data.isPrivate,
    cover: filename || null
  };

  return Playlist.create(playlistData)
    .then(playlist => {
      const playlistObj = playlist.toJSON();

      return !playlistObj.cover
        ? playlistObj
        : {
          ...playlistObj,
          coverUrl: `${uploadsPath}/${playlistObj.cover}`
        };
    });
};

const getPlaylists = userId => {
  return Playlist.find({ creatorId: userId }).lean();
};

module.exports = {
  addPlaylist,
  getPlaylists
};
