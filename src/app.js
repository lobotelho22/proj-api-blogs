const express = require('express');

// ...
const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.post('/login', User.doLogin);
app.post('/user', (_req, res) => {
    res.status(200).send('Toca pintinho');
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
