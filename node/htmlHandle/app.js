const express = require('express');
const productRoutes = require('./route/product');
const app = express();

app.use(productRoutes);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 