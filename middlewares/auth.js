const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { SECRET_KEY_DEV } = require('../config');

const { NODE_ENV, SECRET_KEY } = process.env;

module.exports = (req, _, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  const errorMsg = 'Неправильные почта или пароль';

  if (!authorization || !authorization.startsWith('Bearer')) {
    return next(new UnauthorizedError(`${errorMsg}!`));
  }

  const token = authorization.replace(bearer, '');
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? SECRET_KEY : SECRET_KEY_DEV,
    );
  } catch (err) {
    return next(new UnauthorizedError(`${errorMsg}!`));
  }

  req.user = payload;

  return next();
};
