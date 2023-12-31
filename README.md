# API для дипломного проекта для Яндекс.Практикум.  Movies Explorer.
## Выполнила студентка 60 когорты Мария Гончаренко.

### Описание работы:
В данном репозитории хранится бэкенд приложения  Movies Explorer. API содержит следующие роуты:
- GET /users/me - возвращает информацию о пользователе;
- PATCH /users/me - обновляет информацию о пользователе;
- GET /movies - возвращает все сохранённые текущим пользователем фильмы;
- POST /movies - создаёт фильм;
- DELETE /movies/:movieId - удаляет сохранённый фильм по id;
- POST /signup - регистрация пользователя;
- POST /signin - авторизация пользователя;

### Функционал API: 
+ Регистрация
+ Авторизация
+ Обновление данных пользователя
+ Получение информации о текущем пользователе
+ Получение списка фильмов
+ Создание фильма
+ Удаление фильма
+ Центральная обработка ошибок
+ Валидация входящих данных

### Технологии:
+ NodeJS
+ Express
+ MongoDB
+ Mongoose
  
## Установка и запуск проекта:
Клонировать репозиторий: `git clone https://github.com/mariya-goncharenko/movies-explorer-api.git`

Установить зависимости: `npm install`

Запустить сервер: `npm run start`

Запустить сервер с hot-reload: `npm run dev`

## Чеклист:
- [Критерии оценки дипломной работы](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html)

## Ссылки на проект:

IP - 158.160.103.88
Backend - https://api.moviesexp.nomoredomains.rocks
Frontend - https://moviexp.nomoredomains.rocks
