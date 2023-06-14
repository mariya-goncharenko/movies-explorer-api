const { Router } = require('express');

const router = Router();

const { getCurrentUser, updateUserProfile } = require('../controllers/users');
const { getUserIdValidation, updateUserProfileValidation } = require('../validations/usersValidation');

// Находим пользователя:
router.get('/me', getUserIdValidation, getCurrentUser);
// Обновление профиля:
router.patch('/me', updateUserProfileValidation, updateUserProfile);

module.exports = router;
