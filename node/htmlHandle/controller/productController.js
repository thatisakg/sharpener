const path = require('path');

function getProducts(req, res) {
    res.sendFile(path.join(__dirname, '../view/products.html'));
}

module.exports = {
    getProducts
};