const productService = require('../services/productService');
const { sendResponse, sendErrorResponse } = require('../utils/response');

const getAllProducts = (req, res, next) => {
  try {

    const result = productService.getAllProducts();
    console.log('Products fetched successfully', result);

    return sendResponse(res, result, 200);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const getProductById = (req, res, next) => {
  try {

    const productId = req.params.id;

    const result = productService.getProductById(productId);

    // Example validation
    if (!result) {
      let err = new Error('Product not found');
      err.statusCode = 404;

      throw err;
    }

    return sendResponse(res, result, 200);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addNewProduct = (req, res, next) => {
  try {

    const { name, price } = req.body;

    // Validation
    if (!name || !price) {
      let err = new Error('Name and Price are required');
      err.statusCode = 400;

      throw err;
    }

    const result = productService.addNewProduct(req.body);

    return sendResponse(res, result, 201);

  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct
};  