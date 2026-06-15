const connection = require('../db/dbConnection');

const createUser = (req, res) => {
    const { userName, email } = req.body;

    const query =
        'INSERT INTO Users (UserName, Email) VALUES (?, ?)';

    connection.query(query, [userName, email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: 'User created successfully',
            id: result.insertId
        });
    });
};

const getUsers = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json(results);
        }
    );
};

module.exports = {
    createUser,
    getUsers
};