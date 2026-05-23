const express = require("express");

const bookRoutes = require("./routes/books");

const app = express();

app.use(bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

