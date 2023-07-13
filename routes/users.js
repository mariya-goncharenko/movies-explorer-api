const userRouter = require('express').Router();
const { getCurrentUser, updateUser } = require('../controllers/users');
const {
  updateUserValidator,
} = require('../validations/usersValidation');

// Получение пользователя:
userRouter.get('/users/me', getCurrentUser);
// Изменение данных пользователя:
userRouter.patch('/users/me', updateUserValidator, updateUser);

module.exports = userRouter;
