const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: String,
  creatorId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  cover: String,
  isPrivate: Boolean,
  songs: [
    {
      type: Schema.ObjectId,
      ref: 'Song'
    }
  ]
}, { versionKey: false });

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;