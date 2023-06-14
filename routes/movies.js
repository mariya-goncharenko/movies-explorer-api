const { Router } = require('express');

const movieRouter = Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidator,
  deleteMovieValidator,
} = require('../validations/moviesValidation');

// Получить все сохраненные фильмы текущего пользователя
movieRouter.get('/', getMovies);

// Создать фильм с переданными данными
movieRouter.post('/', createMovieValidator, createMovie);

// Удалить сохраненный фильм по его ID
movieRouter.delete('/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
