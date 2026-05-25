const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.post("/api/products", productController.addProduct);

module.exports = router;
