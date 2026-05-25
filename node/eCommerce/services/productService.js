const getAllProducts = () => {
  try {
    const products = [
      { id: 1, name: 'Laptop', price: 50000 },
      { id: 2, name: 'Mobile', price: 20000 }
    ];

    return products;

  } catch (err) {
    throw err;
  }
};

const getProductById = (productId) => {
  try {
    const product = {
      id: productId,
      name: 'Laptop',
      price: 50000
    };

    return product;

  } catch (err) {
    throw err;
  }
};

const addNewProduct =  (productData) => {
  try {
    const newProduct = {
      id: 3,
      ...productData
    };

    return newProduct;

  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct
};