const { celebrate, Joi } = require('celebrate');

const updateUserProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email({ tlds: { allow: false } }),
  }),
});

const getUserIdValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  updateUserProfileValidation,
  getUserIdValidation,
};
