const { sendResponse, sendErrorResponse } = require('../utils/response');

const getAllUsers = (req, res, next) => {
  try {
    // Simulated users data
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ];

    return sendResponse(res, users, 200);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addNewUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
      let err = new Error('Name and Email are required');
      err.statusCode = 400;

      throw err;
    }

    // Simulated user creation
    const user = {
      id: 3,
      name,
      email
    };

    return sendResponse(res, user, 201);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const getUserById = (req, res, next) => {
  try {
    const userId = req.params.id;

    // Simulated user fetch
    if (userId > 10) {
      let err = new Error('User not found');
      err.statusCode = 404;

      throw err;
    }

    const user = {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com'
    };

    return sendResponse(res, user, 200);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById
};