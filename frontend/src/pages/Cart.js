/** @format */

import React, { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { CartContext } from "../contexts/CartContext";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  // const value = useContext(CartContext);

  return (
    <>
      <Header />
      <Nav />
      {/* {value} */}

      <div>
        {cart.map((item) => {
          return (
            <div key={item.product_id}>
              <p>{item.product_name}</p>
              <p>{item.product_price}</p>
              <img src={item.product_image} />
            </div>
          );
        })}
      </div>
      {/* {cart.length === 0 ? (
          <p>Your cart is empty. Please buy something!</p>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div> {product.product.name}</div>
              </>
            );
          })
        )} */}
      {/* {setCart.map((product) => {
          return (
            <>
              <div>{product.product_name}</div>
            </>
          );
        })}
      </div>
      <div>
        <h1>Order Summary</h1>
      </div> */}

      <Footer />
    </>
  );
}
export default Cart;
