const { body, validationResult } = require('express-validator');

const facility = () => [
  body('userID').isString().not().isEmpty()
    .withMessage('userID must cannot be empty'),
  body('name').isString().not().isEmpty()
    .withMessage('name of facility cannot be empty'),
  body('location').isString().not().isEmpty()
    .withMessage('location of facility cannot be empty'),
];

const validator = ((req, res, next) => {
  const errors = validationResult(req).array();
  if (errors.length === 0) return next();
  const error = new Error(`${errors[0].param}: ${errors[0].msg}`);
  error.status = 422;
  throw error;
});

module.exports = {
  facility,
  validator,
};
