const router = require('express').Router();

const {
  updateUserProfileValidation,
} = require('../validations/usersValidation');

const {
  getCurrentUserInfo,
  updateUserProfile,
} = require('../controllers/users');


// Находим пользователя:
router.get('/me', getCurrentUserInfo);
// Обновление профиля:
router.patch('/me', updateUserProfileValidation, updateUserProfile);

module.exports = router;
