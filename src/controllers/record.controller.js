/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');
const Record = require('../models/Record');
const User = require('../models/User');

const methods = {
  async onAdd(req, res) {
    const data = req.body;
    const { userID } = data;
    try {
      if (!ObjectId.isValid(userID)) return res.status(400).json('ID not valid');
      const result = await User.findById(userID);
      if (!result) return res.status(400).json({ error: 'User not found' });
      const doc = new Record(data); await doc.save();
      return res.success({ data: doc });
    } catch (error) {
      return res.error(error);
    }
  },

  async onGetAll(req, res) {
    try {
      const records = await Record.find({ userID: req.user._id });
      res.success(records);
    } catch (error) {
      res.error(error);
    }
  },

  async onGet(req, res) {
    const { id } = req.params;
    try {
      const record = await Record.findById(id);
      res.success(record);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
