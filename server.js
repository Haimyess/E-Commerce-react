/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const products_router = require("./routes/products.js");
const order_router = require("./routes/Orders.js");

// Creating the server
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
// Listenting to the port 5000 in localhost
app.listen(process.env.PORT || 8080, () => {
  console.log(`listen on port ${process.env.PORT || 8080}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", products_router);
app.use("/api/order", order_router);

// // Making a get request, part of the CRUD (Create, read, update and delete) to the home
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// // Get request to the cart
// app.get("/cart", (req, res) => {
//   res.send("Cart page");
// });
