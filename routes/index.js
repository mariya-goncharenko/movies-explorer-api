const router = require('express').Router();

const auth = require('../middlewares/auth');

const userRouter = require('./users');
const movieRouter = require('./movies');

const { registerUser, loginUser } = require('../controllers/auth');
const {
  loginValidator,
  registerValidator,
} = require('../validations/authValidation');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', registerValidator, registerUser);
router.post('/signin', loginValidator, loginUser);

router.use(auth);

router.use('/', userRouter);
router.use('/', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
