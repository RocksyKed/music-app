const errorHandler = (err, req, res, next) => {
  if (err && err.isCustomError) {
    res.status(err.status || 400).json({
      message: err.details.message
    });
  } else {
    res.status(500).json({
      message: 'Something went wrong'
    });

    if (process.env.NODE_ENV !== 'production') {
      // TODO: use logger package
      console.error(err);
    }
  }
};

module.exports = errorHandler;
