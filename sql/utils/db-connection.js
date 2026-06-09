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
        console.error('Error connecting:', err);
        return;
    }

    console.log('Connected to MySQL!');

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table:', err);
            return;
        }

        console.log('Users table created successfully!');
    });
});

module.exports = connection;