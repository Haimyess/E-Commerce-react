/** @format */

import React from "react";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Cart() {
  return (
    <>
      <Header />
      <Nav />
      <h1>Your cart is empty. Please buy something!</h1>
      <Footer />
    </>
  );
}
export default Cart;
