const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: String,
  avatar: String,
  birthDate: Date,
  registrationDate: Date,
  genres: Array,
  followedPlaylists: [
    {
      type: Schema.ObjectId,
      ref: 'Playlist'
    }
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;