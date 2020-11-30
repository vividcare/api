const mongoose = require('mongoose');
const config = require('./app');

const database = {
  mongoDB() {
    const db = mongoose.connect(config.mongodbUri,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error) => {
        if (error) console.error('MongoDB error: ', error);
        console.log('MongoDB connected');
      });
    return db;
  },
};

module.exports = database.mongoDB();
