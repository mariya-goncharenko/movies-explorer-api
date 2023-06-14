const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => /.+@.+\..+/.test(email),
      message: 'Требуется ввести корректный электронный адрес',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: [2, 'Минимальная длина поля - 2'],
    maxlength: [30, 'Максимальная длина поля - 30'],
  },
},
  {
    versionKey: false,
    statics: {
      findUserByCredentials(email, password) {
        return this
          .findOne({ email })
          .select('+password')
          .then((user) => {
            if (user) {
              return bcrypt.compare(password, user.password).then((matched) => {
                if (matched) {
                  return user;
                }
                throw new Error('Неправильные почта или пароль');
              });
            }
            throw new Error('Неправильные почта или пароль');
          });
      },

    },
  },
);

module.exports = mongoose.model('user', userSchema);

