const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  facility: {
    type: String,
    required: [true, 'Facility is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  treatment: {
    type: String,
    required: [true, 'treatment is required'],
  },
  assessments: {
    type: String,
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Record', schema);
