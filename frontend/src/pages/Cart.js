/** @format */

import React, { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./categories.css";

import { CartContext } from "../contexts/CartContext";

function Cart({ onAdd, onRemove }) {
  const [cart, setCart] = useContext(CartContext);
  // const [total, setTotal] = useState([]);

  // displayTotal = () => {
  //   setTotal(total);
  // };

  // total =
  // setTotal(total)

  // const total = cart.map((quantity) => {
  //   return [quantity.quantity * quantity.product_price];
  // });

  const totalPrice = cart.reduce((a, c) => a + c.product_price * c.quantity, 0);
  // const value = useContext(CartContext);

  console.log(cart);
  // console.log(cart.length);

  return (
    <>
      <Header />
      <Nav />
      {/* {value} */}
      <div className='cart-product-wrapper'>
        <section className='cart-products-container'>
          {cart.map((item) => {
            return (
              <div className='cart-product' key={item.product_id}>
                <div className='cart-product--img-name'>
                  <img className='cart-product--img' src={item.product_image} />
                  <p className='cart-product--title'>{item.product_name}</p>
                </div>
                <div className='cart-quantity--btns'>
                  <button
                    onClick={() => {
                      onRemove(item);
                    }}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
                {/* <p className='cart-product--info'>{item.product_description}</p> */}
                <div>
                  <p className='cart-product--price'>
                    ${item.quantity * item.product_price}{" "}
                    {/* <span> ${`${item.product_price} each`}</span> */}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <aside className='cart-wrapper-summary'>
          <div className='cart-summary'>
            <h2>Order Summary</h2>
            {/* <p>{total}</p> */}
            <p>
              <strong>Total:</strong> {totalPrice}
            </p>

            <br />
            <button>Checkout</button>
          </div>
        </aside>
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
