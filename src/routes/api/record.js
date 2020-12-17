const router = require('express').Router();
const controllers = require('../../controllers/record.controller');
const { record, validator } = require('../../validators/record');
const auth = require('../auth');

router.get('/', auth, controllers.onGetAll);
router.get('/:id', auth, controllers.onGet);
router.post('/add', record(), validator, controllers.onAdd);

module.exports = router;
