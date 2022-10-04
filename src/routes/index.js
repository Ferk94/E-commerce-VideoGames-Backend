const { Router } = require('express');

const usersRouter = require('./users/users');
const productsRouter = require('./products/prodcuts');


const router = Router();


router.use('/users', usersRouter);
router.use('/products', productsRouter);


module.exports = router;