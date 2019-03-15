class ClientError extends Error {
  constructor(details, msg = 'Client error') {
    super(msg);

    this.details = details;
    this.isCustomError = true;
    this.type = 'CLIENT_ERROR';
    this.status = 400;

    Error.captureStackTrace(this, ClientError);
  }
}

module.exports = ClientError;
