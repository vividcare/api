/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');
const Facility = require('../models/Facility');
const User = require('../models/User');

const methods = {
  async onAdd(req, res) {
    const data = req.body;
    const { userID } = data;
    try {
      if (!ObjectId.isValid(userID)) return res.status(400).json('ID not valid');
      const result = await User.findById(userID);
      if (!result) return res.status(400).json({ error: 'User not found' });
      const doc = new Facility(data); await doc.save();
      return res.success({ data: doc });
    } catch (error) {
      return res.error(error);
    }
  },

  async onGetAll(req, res) {
    try {
      const facilities = await Facility.find({ userID: req.user._id });
      res.success(facilities);
    } catch (error) {
      res.error(error);
    }
  },
  async onGet(req, res) {
    const { id } = req.params;
    try {
      const facility = await Facility.findById(id);
      res.success(facility);
    } catch (error) {
      res.error(error);
    }
  },
  async onUpdate(req, res) {
    const data = req.body;
    try {
      const { id } = req.params;
      const facility = await Facility.findById(id);
      if (!facility) return res.status(400).json({ error: 'Facility not found' });
      await Facility.updateOne({ _id: id }, data);
      return res.success({ data });
    } catch (error) {
      return res.error(error);
    }
  },

  async onDelete(req, res) {
    const { id } = req.params;
    try {
      const facility = await Facility.findByIdAndDelete(id);
      if (!facility) return res.status(400).json({ error: 'Facility not found' });
      return res.success({ message: 'Facility removed successfully' });
    } catch (error) {
      return res.error(error);
    }
  },
};

module.exports = { ...methods };
