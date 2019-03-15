class AuthError extends Error {
  constructor(details, msg = 'Auth error') {
    super(msg);

    this.details = details;
    this.type = 'AUTH_ERROR';
    this.status = 401;
    this.isCustomError = true;

    Error.captureStackTrace(this, AuthError);
  }
}

module.exports = AuthError;
