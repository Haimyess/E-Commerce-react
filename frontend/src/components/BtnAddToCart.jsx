/** @format */

/** @format */

import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

function BtnAddToCart(props) {
  const { product } = props;
  const [cart, setCart] = useContext(CartContext);

  function addToCart(product) {
    setCart([...cart, product]);

    // console.log(cart);
  }
  return (
    <>
      <button onClick={() => addToCart(product)}> Add to cart</button>
    </>
  );
}

export default BtnAddToCart;

// className = "add-btn";
