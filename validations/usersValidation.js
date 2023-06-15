const { Joi, celebrate } = require('celebrate');

const getCurrentUserValidator = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});

const updateUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email({ tlds: { allow: false } }),
  }),
});

module.exports = {
  getCurrentUserValidator,
  updateUserValidator,
};
