const { Router } = require('express');

const router = Router();

const { signUpValidation } = require('../validations/authValidation');
const { registrationUser } = require('../controllers/auth');

// Маршрут для регистрации пользователя
// Проверяет валидацию входных данных перед вызовом контроллера для регистрации пользователя
router.post('/signup', signUpValidation, registrationUser);

module.exports = router;
