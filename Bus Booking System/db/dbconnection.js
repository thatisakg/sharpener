const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }

    console.log('Connected to MySQL');

    createTables();
});

function createTables() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            UserID INT AUTO_INCREMENT PRIMARY KEY,
            UserName VARCHAR(100) NOT NULL,
            Email VARCHAR(100) UNIQUE NOT NULL
        )
    `;

    const createBusesTable = `
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255) NOT NULL,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )
    `;

    connection.query(createUsersTable, (err) => {
        if (err) {
            console.error('Error creating Users table:', err);
            return;
        }

        console.log('Users table ready');
    });

    connection.query(createBusesTable, (err) => {
        if (err) {
            console.error('Error creating Buses table:', err);
            return;
        }

        console.log('Buses table ready');
    });
}

module.exports = connection;