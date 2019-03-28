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
          cover: `${uploadsPath}/${playlistObj.cover}`
        };
    });
};

module.exports = {
  addPlaylist
};
