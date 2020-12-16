/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-mixed-operators */
const jwt = require('jsonwebtoken');
const { secret } = require('../configs/app');

function auth(req, res, next) {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      auth: false,
      error: 'No token provided',
    });
  }
  token = token.split(' ')[1];
  // verify the token and expire
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        auth: false,
        message: err.message,
      });
    }
    req.user = decoded.user;
    next();
  });
}

module.exports = auth;
