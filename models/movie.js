const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const config = require('../config');

const movieSchema = new Schema({
// Cтрана создания фильма:
  country: {
    type: String,
    required: true,
  },
// Режиссёр фильма:
  director: {
    type: String,
    required: true,
  },
// Длительность фильма:
  duration: {
    type: Number,
    required: true,
  },
// Год выпуска фильма:
  year: {
    type: String,
    required: true,
  },
// Описание фильма:
  description: {
    type: String,
    required: true,
  },
// Ссылка на постер к фильму:
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => config.URL_REGEX.test(url),
      message: 'Требуется ввести корректный URL',
    },
  },
// Ссылка на трейлер фильма:
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => config.URL_REGEX.test(url),
      message: 'Требуется ввести корректный URL',
    },
  },
// Миниатюрное изображение постера к фильму:
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => config.URL_REGEX.test(url),
      message: 'Требуется ввести корректный URL',
    },
  },
// _id пользователя, который сохранил фильм:
  owner: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
// id фильма, который содержится в ответе сервиса MoviesExplorer:
  movieId: {
    type: Number,
    required: true,
  },
// Название фильма на русском языке:
  nameRU: {
    type: String,
    required: true,
  },
// Название фильма на английском языке:
  nameEN: {
    type: String,
    required: true,
  },
},
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);
