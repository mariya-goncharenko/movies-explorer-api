const { celebrate, Joi } = require('celebrate');
const config = require('../config');

const createMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(config.URL_REGEX),
    trailerLink: Joi.string().required().regex(config.URL_REGEX),
    thumbnail: Joi.string().required().regex(config.URL_REGEX),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
});

module.exports = {
  createMovieValidator,
  deleteMovieValidator,
};
