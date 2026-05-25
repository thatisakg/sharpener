const express = require('express');
const cartController = require('../controller/cartController');
const router = express.Router();

router.get('/cart/:userId', cartController.getCartForUser);
    
router.post('/cart/:userId', cartController.addProductToCart); 

module.exports = router;