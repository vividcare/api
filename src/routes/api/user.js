const router = require('express').Router();
const controllers = require('../../controllers/user.controller');

router.get('/', controllers.onGetAll);

module.exports = router;
