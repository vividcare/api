/* eslint-disable no-mixed-operators */
const jwt = require('express-jwt');
const { secret } = require('../configs/app');

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token'
    || req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret,
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret,
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  }),
};

module.exports = auth;
