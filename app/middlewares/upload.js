const multer = require('multer');
const cuid = require('cuid');
const path = require('path');
const mime = require('mime');

const UPLOAD_PATH = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, UPLOAD_PATH);
  },
  filename: (_, file, cb) => {
    cb(null, `${cuid()}.${mime.getExtension(file.mimetype)}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
