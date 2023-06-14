const { Router } = require('express');

const router = Router();

const { signInValidation } = require('../validations/authValidation');
const { loginUser } = require('../controllers/auth');

// Маршрут для входа пользователя
// Проверяет валидацию входных данных перед вызовом контроллера для аутентификации
router.post('/signin', signInValidation, loginUser);

module.exports = router;
