const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const movieSchema = Schema(
  {
    // Cтрана создания фильма. Обязательное поле-строка:
    country: {
      type: String,
      required: true,
    },
    // Режиссёр фильма. Обязательное поле-строка:
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
        validator: (v) => isURL(v),
        message: 'Неправильный формат ссылки',
      },
    },
    // Ссылка на трейлер фильма:
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isURL(v),
        message: 'Неправильный формат ссылки',
      },
    },
    // Миниатюрное изображение постера к фильму:
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isURL(v),
        message: 'Неправильный формат ссылки',
      },
    },
    // _id пользователя, который сохранил фильм.
    owner: {
      type: ObjectId,
      ref: 'user',
      required: true,
    },
    // id фильма, который содержится в ответе сервиса MoviesExplorer.
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
