/** @format */

const express = require("express");
const router = express.Router();
const { _getAllProducts } = require("../controlers/products.js");

router.get("/all", _getAllProducts);

module.exports = router;
