const app = require('./app');
const connect = require('./app/db');

const PORT = process.env.PORT || 8080;

connect()
  .then(() => {
    app.listen(PORT, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Server run on port ${PORT}`);
      }
    });
  })
  .catch(err => {
    console.error(err, 'Database connection failed')
  });
