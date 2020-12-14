const jwt = require('jsonwebtoken');
const passport = require('passport');
const { ObjectId } = require('mongodb');
const User = require('../models/User');

const config = require('../configs/app');

const methods = {
  async onRegister(req, res) {
    const { name, email, password } = req.body;
    const data = { name, email };
    try {
      User.register(data, password, (err) => {
        if (err) {
          return res.status(400).json(err);
        }
        return passport.authenticate('local')(req, res, () => res.success(data));
      });
    } catch (error) {
      res.error(error);
    }
  },

  async onGetAll(req, res) {
    try {
      const results = await User.find({});
      res.success(results);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    const { id } = req.params;
    try {
      if (!ObjectId.isValid(id)) return res.status(400).json('ID not valid');
      const result = await User.findById(req.params.id);
      if (!result) return res.status(404).json({ error: 'User not found' });
      return res.success(result);
    } catch (error) {
      return res.error(error);
    }
  },

  async onLogin(req, res, next) {
    try {
      passport.authenticate('local', (err, user) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });
        return req.logIn(user, (error) => {
          if (error) return next(error);
          const token = jwt.sign({ user }, process.env.secret,
            { expiresIn: config.token_exp_days });
          return res.success({ token, user });
        });
      })(req, res, next);
    } catch (error) {
      res.error(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      if (!ObjectId.isValid(id)) return res.status(400).json('ID not valid');
      const result = await User.findById(req.params.id);
      if (!result) return res.status(400).json({ error: 'User not found' });
      await User.updateOne({ _id: id }, data);
      return res.success({ data });
    } catch (error) {
      return res.error(error);
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      if (!ObjectId.isValid(id)) return res.status(400).json('ID not valid');
      const result = await User.findByIdAndDelete(id);
      if (!result) return res.status(400).json({ error: 'User not found' });
      return res.success({ message: 'User deleted successfully' });
    } catch (error) {
      return res.error(error);
    }
  },

};

module.exports = { ...methods };
