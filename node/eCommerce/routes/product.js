const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Fetching all products.');
});

router.post('/products', (req, res) => {
  res.send('Adding a new product.');
});

router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
});

module.exports = router;    