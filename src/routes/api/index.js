const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/facility', require('./facility'));

module.exports = router;
