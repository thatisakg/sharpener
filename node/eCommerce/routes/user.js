const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Fetching all users.');
});

router.post('/users', (req, res) => {
  res.send('Adding a new user.');
});         

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Fetching user with ID: ${userId}`);
});

module.exports = router;    