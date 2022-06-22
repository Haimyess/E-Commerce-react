/** @format */
// Rwquiring the database from heroku from the file database.js
const database = require("../database.js");

// Getting from database table products, all of the products in it
const getAllProducts = () => {
  return database("products").select("*").orderBy("product_name");
};

// Exporting the function getAllPRoduct that gets the products of our ecommerce website
module.exports = {
  getAllProducts,
};
