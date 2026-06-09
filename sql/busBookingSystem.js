const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.error('Connection error:', err);
        return;
    }

    console.log('Connected to MySQL');

    const queries = [
        `CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255) NOT NULL,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10,2) NOT NULL,
            paymentStatus VARCHAR(255) NOT NULL
        )`
    ];

    queries.forEach((query) => {
        connection.query(query, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });

    console.log('Tables created successfully');
});

app.get('/', (req, res) => {
    res.send('Bus Booking App');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});