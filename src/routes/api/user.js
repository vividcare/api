const router = require('express').Router();
const controllers = require('../../controllers/user.controller');

router.get('/', controllers.onGetAll);
router.get('/:id', controllers.onGetById);
router.post('/register', controllers.onRegister);
router.post('/login', controllers.onLogin);
router.post('/update/:id', controllers.update);
router.get('/delete/:id', controllers.delete);

module.exports = router;
