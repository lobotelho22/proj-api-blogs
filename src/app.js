const express = require('express');

// ...
const User = require('./controllers/user.controller');
const Category = require('./controllers/category.controller');
const middle = require('./middlewares');

const app = express();

app.use(express.json());

app.get('/user', middle.validateToken, User.getAllUsers);
app.get('/user/:id', middle.validateToken, User.getUser);
app.post('/login', middle.authRequiredData, User.doLogin);
app.post('/user', middle.validation, User.createUser);

app.post('/categories', middle.validateToken, middle.authRequiredData, Category.createCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
