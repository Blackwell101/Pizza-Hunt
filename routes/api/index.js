const router = require('express').Router();

const pizzaRoutes = require('./pizza-routes');

//ADD PREFIX OF `/PIZZAS`TO ROUTES CREATED IN `PIZZA-ROUTES.JS`
router.use('/pizzas', pizzaRoutes);

module.exports = router