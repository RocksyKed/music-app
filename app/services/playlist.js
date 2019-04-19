const Playlist = require('../models/playlist');
const ClientError = require('../errors/clientError');

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

const deletePlaylist = (playlistId, userId) => {
  if (!/^[0-9a-fA-F]{24}$/.test(playlistId)) {
    return Promise.reject(
      new ClientError({ message: 'Playlist id is invalid' })
    );
  }
  return Playlist.deleteOne({ _id: playlistId, creatorId: userId })
    .then(res => {
      if (res.deletedCount === 0) {
        return Promise.reject(
          new ClientError({
            message: 'Playlist doesn\'t belong to user or playlist id is invalid'
          })
        )
      } else {
        return res;
      }
    });
};

module.exports = {
  addPlaylist,
  getPlaylists,
  deletePlaylist
};
