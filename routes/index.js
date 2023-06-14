const { Router } = require('express');

const router = Router();

const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

// Маршруты для аутентификации
router.use('/', require('./signin'));
router.use('/', require('./signup'));

// Проверка аутентификации
router.use(auth);

// Маршруты для пользователей
router.use('/users', require('./users'));

// Маршруты для карточек
router.use('/movies', require('./movies'));

// Обработка несуществующих маршрутов
router.use((req, res, next) => next(new NotFoundError('Страницы по запрошенному URL не существует')));

module.exports = router;
