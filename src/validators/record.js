const { body, validationResult } = require('express-validator');

const record = () => [
  body('userID').isString().not().isEmpty()
    .withMessage('userID must cannot be empty'),
  body('facility').isString().not().isEmpty()
    .withMessage('name of facility cannot be empty'),
  body('description').isString().not().isEmpty()
    .withMessage('description cannot be empty'),
  body('treatment').isString().not().isEmpty()
    .withMessage('medication cannot be empty'),
  body('comment').isString().not().isEmpty()
    .withMessage('comment cannot be empty'),
];

const validator = ((req, res, next) => {
  const errors = validationResult(req).array();
  if (errors.length === 0) return next();
  const error = new Error(`${errors[0].param}: ${errors[0].msg}`);
  error.status = 422;
  throw error;
});

module.exports = {
  record,
  validator,
};
