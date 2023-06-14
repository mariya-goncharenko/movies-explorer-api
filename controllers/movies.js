const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({ owner: req.user._id });
    res.send(movies);
  } catch (error) {
    next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    } = req.body;

    const movie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
      owner: req.user._id,
    });

    res.send(movie);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(
        new BadRequestError(
          'Переданы некорректные данные при создании карточки фильма',
        ),
      );
    } else {
      next(error);
    }
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId).orFail();
    const owner = movie.owner.toString();

    if (req.user._id === owner) {
      await Movie.deleteOne(movie);
      res.send(movie);
    } else {
      throw new ForbiddenError('Невозможно удалить фильм');
    }
  } catch (error) {
    if (error.name === 'CastError') {
      next(new BadRequestError('Переданы некорректные данные удаления'));
    } else {
      next(error);
    }
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
