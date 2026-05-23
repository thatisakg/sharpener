const express = require('express');
const app = express();
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

app.use(userRoutes);

app.use(productRoutes);

app.use(cartRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});