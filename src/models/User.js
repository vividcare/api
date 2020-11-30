/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../configs/app');

const schema = new mongoose.Schema({
  username: {
    type: String, index: true, required: true, unique: true, uniqueCaseInsensitive: false,
  },
  password: { type: String, index: true },
  email: { type: String },
  birthday: Date,
}, { timestamps: true });

// Apply the uniqueValidator plugin to userSchema
schema.plugin(uniqueValidator);

// Generate JWT
schema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setMinutes(today.getMinutes() + 30);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, config.secret);
};

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    username: this.username,
    email: this.email,
    photoURL: this.image || 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
    birthday: this.birthday,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

// Hash password
schema.methods.passwordHash = function (password) {
  return crypto.createHash('sha1').update(password).digest('hex');
};

// verify password
schema.methods.validPassword = function (password) {
  return this.passwordHash(password) === this.password;
};

// custom field before save
schema.pre('save', function (next) {
  this.password = this.passwordHash(this.password);
  next();
});

module.exports = mongoose.model('User', schema);
