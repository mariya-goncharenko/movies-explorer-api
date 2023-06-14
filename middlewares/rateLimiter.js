const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  max: 160,
  windowMs: 55000,
  message:
    'В настоящий момент превышено количество запросов на сервер. Пожалуйста, попробуйте повторить позже',
});

module.exports = limiter;
