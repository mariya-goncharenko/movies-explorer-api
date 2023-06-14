const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');

// Получение информации о текущем пользователе
module.exports.getCurrentUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).orFail(new NotFoundError('Пользователь по указанному _id не найден'));
    res.send(user);
  } catch (error) {
    next(error);
  }
};

// Обновление данных пользователя
module.exports.updateUserProfile = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const { userId } = req.user;
    const user = await User.findByIdAndUpdate(
      userId,
      { email, name },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundError('Пользователь с указанным _id не найден');
    }

    res.send(user);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Переданы некорректные данные при обновлении информации'));
    } else {
      next(error);
    }
  }
};
