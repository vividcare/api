const { body, validationResult } = require('express-validator');

const user = () => [
  body('name').isString().not().isEmpty()
    .withMessage('name cannot be empty'),
  body('password').isLength({ min: 4 }).withMessage('password must be at least 4 chars long'),
  body('email').isEmail().withMessage('email is not valid'),
];

const validator = ((req, res, next) => {
  const errors = validationResult(req).array();
  if (errors.length === 0) return next();
  const error = new Error(`${errors[0].param}: ${errors[0].msg}`);
  error.status = 422;
  throw error;
});

module.exports = {
  user,
  validator,
};
