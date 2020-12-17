const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    select: false,
  },
}, { timestamps: true });

schema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = mongoose.model('User', schema);
