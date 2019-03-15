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
    required: true,
    select: false
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
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;