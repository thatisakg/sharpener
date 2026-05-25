const getAllProducts = () =>{
  return 'Fetching all products.';
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  return `Fetching product with ID: ${productId}`;
};

const addNewProduct = () => {
  return 'Adding a new product.';
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct
};