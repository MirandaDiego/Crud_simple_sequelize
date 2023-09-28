
const express = require('express');
const users = require('../controllers/UsersController')

const routes = express.Router();

routes.get('/users', users.findAll);
routes.post('/users', users.create);
routes.delete("/users/:id", users.del);
routes.put("/users/:id", users.update);
routes.get("/users/:name", users.find);



module.exports = routes

