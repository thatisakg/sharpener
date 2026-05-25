const { sendResponse, sendErrorResponse } = require('../utils/response');

const getCartForUser = (req, res, next) => {
  try {
    const userId = req.params.userId;

    const cart = {
      userId,
      products: [
        { id: 1, name: 'Laptop', quantity: 1 },
        { id: 2, name: 'Mobile', quantity: 2 }
      ]
    };

    return sendResponse(res, cart, 200);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addProductToCart = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { id, name, quantity } = req.body;

    // Validation
    if (!id || !name || !quantity) {
      let err = new Error('Product ID, Name and Quantity are required');
      err.statusCode = 400;

      throw err;
    }

    // Simulated add to cart
    const cart = {
      userId,
      addedProduct: {
        id,
        name,
        quantity
      },
      message: 'Product added to cart successfully'
    };

    return sendResponse(res, cart, 201);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getCartForUser,
  addProductToCart
};