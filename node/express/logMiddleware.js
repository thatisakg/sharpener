const express = require('express');
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use(productRoutes);
app.use(categoryRoutes);

app.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});