const { config } = require('dotenv');

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  config();
}

const PORT = 3000; // Порт сервера
const DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb'; // URL базы данных
const SECRET_KEY_DEV = 'dev-secret';
const { SECRET_SIGNING_KEY = 'dev-secret' } = process.env;// Секретный ключ подписи

module.exports = {
  PORT,
  DB_URL,
  SECRET_SIGNING_KEY,
  SECRET_KEY_DEV,
  NODE_ENV,
};
