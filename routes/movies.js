const movieRouter = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidator,
  deleteMovieValidator,
} = require('../validations/moviesValidation');

// Получение списка фильмов:
movieRouter.get('/movies', getMovies);
// Создания нового фильма:
movieRouter.post('/movies', createMovieValidator, createMovie);
// Удаление фильма:
movieRouter.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
