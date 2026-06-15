const connection = require('../db/dbConnection');

const createBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query =
        'INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';

    connection.query(
        query,
        [busNumber, totalSeats, availableSeats],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: 'Bus added successfully',
                id: result.insertId
            });
        }
    );
};

const getAvailableBuses = (req, res) => {
    const seats = req.params.seats;

    const query =
        'SELECT * FROM Buses WHERE availableSeats > ?';

    connection.query(
        query,
        [seats],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json(results);
        }
    );
};

module.exports = {
    createBus,
    getAvailableBuses
};