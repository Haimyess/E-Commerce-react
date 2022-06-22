/** @format */
// Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
const { getAllProducts } = require("../modules/products.js");

//Get request to READ all of the pordcuts. Could be update, delete, etc (CRUD)
const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

module.exports = {
  _getAllProducts,
};
