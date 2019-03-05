const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/music-app';

const connect = () => mongoose.connect(uri, { useNewUrlParser: true });

module.exports = connect;