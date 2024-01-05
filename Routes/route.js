const express = require('express');
const { courses, login, signup, coursePurchase, orders } = require('../controller/api')

const Router = express.Router();

Router.get('/courses', courses);

Router.post("/login", login);
Router.post("/register", signup);

Router.get("/order", coursePurchase);
Router.post("/cart/:userID", orders);

module.exports = Router;