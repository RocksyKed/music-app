class ClientError extends Error {
  constructor(details, msg = 'Client error') {
    super(msg);

    this.details = details;
    this.type = 'CLIENT_ERROR';
    this.status = 400;
    this.isCustomError = true;

    Error.captureStackTrace(this, ClientError);
  }
}

module.exports = ClientError;
