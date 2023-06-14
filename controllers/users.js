const { ValidationError } = require('mongoose').Error;
// const { CastError } = require('mongoose').Error;

const User = require('../models/user');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');


module.exports.getCurrentUserInfo = (req, res, next) => {
  const userId = req.user._id;
  User.findById(userId)
    .orFail(() => {
      throw new NotFound('Пользователь по указанному _id не найден');
    })
    .then((user) => {
      res.send(user);
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequest('Запрашиваемый пользователь не найден'));
      } else {
        next(e);
      }
    });
};//

// Функция для обновления данных пользователя
const updateUserProfileData = (userId, data) => User.findByIdAndUpdate(userId, data, {
  new: true,
  runValidators: true,
}).then((user) => {
  if (user) {
    return user;
  }
  throw new NotFoundError('Пользователь с указанным _id не найден');
}).catch((err) => {
  if (err instanceof ValidationError) {
    throw new BadRequestError('Переданы некорректные данные при обновлении информации');
  }
  throw err;
});

// Обновление данных пользователя
module.exports.updateUserProfile = (req, res, next) => {
  const { email, name } = req.body;
  const { userId } = req.user;

  updateUserProfileData(userId, { email, name })
    .then((user) => res.send(user))
    .catch((err) => next(err));
};
