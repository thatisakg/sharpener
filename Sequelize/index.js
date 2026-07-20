const express = require("express");
const sequelize = require("./config/database");
require("./models/Student");

const app = express();

app.use(express.json());

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connected to MySQL");

        await sequelize.sync();

        console.log("✅ Students table created successfully");

        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });

    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

startServer();