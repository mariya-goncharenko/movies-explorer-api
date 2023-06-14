const movieRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { createMovieValidator, deleteMovieValidator } = require('../validations/moviesValidation');

// Находим все сохранённые текущим  пользователем фильмы
movieRouter.get('/', getMovies);
// создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
movieRouter.post('/', createMovieValidator, createMovie);
// удаляет сохранённый фильм по id
movieRouter.delete('/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
