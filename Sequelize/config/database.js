const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;