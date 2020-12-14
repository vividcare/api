const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
  },
});

schema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = mongoose.model('User', schema);
