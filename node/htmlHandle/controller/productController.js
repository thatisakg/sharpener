const path = require('path');

const addProduct = (req, res) => {
    console.log(req.body);
    res.send({
        message: "Product Added Successfully",
        data: req.body
    });
};

module.exports = {
    addProduct
};