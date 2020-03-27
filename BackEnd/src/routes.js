const express = require('express');
const routes = express.Router();

const DevController = require('./controllers/devController');
const RegisterController = require('./controllers/registerController');
const Middlewares = require('./middlewares/auth');

routes.post('/', DevController.store);

routes.post('/register', RegisterController.store);
routes.get('/home', Middlewares, RegisterController.show);

module.exports = routes;