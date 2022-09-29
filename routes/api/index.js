const router = require('express').Router();
const commentRoutes = require('./comment.routes');
const pizzaRoutes = require('./pizza-routes');

//ADD PREFIX OF `/PIZZAS`TO ROUTES CREATED IN `PIZZA-ROUTES.JS`
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router