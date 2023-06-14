const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');

// Регистрация пользователя
module.exports.registrationUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hash,
      name,
    });
    const { _id } = user;
    res.status(201).send({
      email,
      name,
      _id,
    });
  } catch (error) {
    if (error.code === 11000) {
      next(
        new ConflictError('Пользователь с таким электронным адресом уже зарегистрирован'),
      );
    } else {
      next(
        new BadRequestError('Переданы некорректные данные при регистрации пользователя'),
      );
    }
  }
};

// Авторизация пользователя
module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByCredentials(email, password);
    const { _id: userId } = user;
    const token = jwt.sign({ userId }, config.SECRET_SIGNING_KEY, { expiresIn: '7d' });
    res.send({ token });
  } catch (error) {
    next(new UnauthorizedError('Неправильные почта или пароль'));
  }
};
