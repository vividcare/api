const router = require('express').Router();
const controllers = require('../../controllers/facility.controller');
const { facility, validator } = require('../../validators/facility');
const auth = require('../auth');

router.get('/', auth, controllers.onGetAll);
router.get('/:id', auth, controllers.onGet);
router.post('/add', auth, facility(), validator, controllers.onAdd);
router.put('/edit/:id', auth, controllers.onUpdate);
router.delete('/remove/:id', auth, controllers.onDelete);

module.exports = router;
