const Service = require('../services/user.service');

const methods = {
  async onGetAll(req, res) {
    try {
      const result = await Service.sayHello();
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
