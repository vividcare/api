const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/facility', require('./facility'));
router.use('/record', require('./record'));

module.exports = router;
