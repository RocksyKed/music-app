const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: String,
  author: String,
  album: String,
  genre: String,
  file: String
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;