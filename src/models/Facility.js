const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'UserID is required'],
  },
  name: {
    type: String,
    required: [true, 'Name of facility is required'],
  },
  location: {
    type: String,
    required: [true, 'City and State of facility is required'],
  },
  doctor: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Facility', schema);
