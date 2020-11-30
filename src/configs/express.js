/* eslint-disable global-require */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = async (app) => {
  // connect MongoDB

  require('./database');

  // CORS
  app.use(cors());

  // Parser Body
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Logger
  app.use(morgan('dev'));

  // Passport
  require('./passport');

  //   Custom Response Format
  app.use(require('./responseFormat'));
};
