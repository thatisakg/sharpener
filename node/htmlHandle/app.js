const express = require("express");
const path = require("path");

const productRoutes = require("./route/productRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "products.html"));
});

// Routes
app.use(productRoutes);

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});