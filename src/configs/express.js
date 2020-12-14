/* eslint-disable global-require */
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

module.exports = async (app) => {
  // connect MongoDB

  require('./database');

  // CORS
  app.use(cors());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  // Parser Body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logger
  app.use(logger('dev'));

  // Passport
  require('./passport');
  app.use(passport.initialize());

  //   Custom Response Format
  app.use(require('./responseFormat'));
};
