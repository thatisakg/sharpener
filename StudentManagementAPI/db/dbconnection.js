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
    const createStudentTable = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            age INT NOT NULL
       );
    `;

    connection.query(createStudentTable, (err) => {
        if (err) {
            console.error('Error creating Students table:', err);
            return;
        }

        console.log('Students table ready');
    });
}

module.exports = connection.promise();