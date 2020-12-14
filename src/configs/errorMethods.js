/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
module.exports = {
  ErrorNotFound(msg) {
    return error;
  },
  ErrorNotModified(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 304;
    return error;
  },
  ErrorBadRequest(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 400;
    return error;
  },
  ErrorUnauthorized(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 401;
    return error;
  },
  ErrorPaymentRequired(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 402;
    return error;
  },
  ErrorForbidden(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 403;
    return error;
  },
  ErrorNotFound(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 404;
    return error;
  },
  ErrorMethodNotAllowed(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 405;
    return error;
  },
  ErrorUnprocessableEntity(msg) {
    const error = new Error(msg);
    error.message = msg;
    error.status = 422;
    return error;
  },
};
