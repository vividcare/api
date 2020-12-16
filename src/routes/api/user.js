const router = require('express').Router();
const controllers = require('../../controllers/user.controller');
const { user, validator } = require('../../validators/user');
const auth = require('../auth');

router.get('/', auth, controllers.onGetAll);
router.get('/:id', auth, controllers.onGetById);
router.post('/register', user(), validator, controllers.onRegister);
router.post('/login', controllers.onLogin);
router.put('/update/:id', auth, controllers.update);
router.delete('/delete/:id', auth, controllers.delete);

module.exports = router;
