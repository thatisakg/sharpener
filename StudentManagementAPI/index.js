const express = require('express');
const db = require('./db/dbconnection.js');
const app = express();

app.use(express.json());

app.use("/", require("./routes/studentRoutes"));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});