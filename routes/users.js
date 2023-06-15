const userRouter = require('express').Router();
const { getCurrentUser, updateUser } = require('../controllers/users');
const {
  getCurrentUserValidator,
  updateUserValidator,
} = require('../validations/usersValidation');

// Получение пользователя:
userRouter.get('/users/me', getCurrentUserValidator, getCurrentUser);
// Изменение данных пользователя:
userRouter.patch('/users/me', updateUserValidator, updateUser);

module.exports = userRouter;
