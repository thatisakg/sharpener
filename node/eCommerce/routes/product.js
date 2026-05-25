const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.get('/products', productController.getAllProducts);

router.post('/products', productController.addNewProduct);

router.get('/products/:id', productController.getProductById);

module.exports = router;    