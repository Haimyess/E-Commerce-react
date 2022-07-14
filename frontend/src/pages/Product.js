/** @format */

import React, { useEffect, useState, useContext } from "react";

import "./styles/Category.css";

import { useParams } from "react-router-dom";

// import BtnAddToCart from "../components/BtnAddToCart";
import Header from "../components/Header";
// import { CartContext } from "../contexts/CartContext";
// import BtnAddToCart from "../components/BtnAddToCart";

function Product({ onAdd }) {
  const [product, setProduct] = useState([]);
  // const [cart, setCart] = useContext(CartContext);

  const params = useParams();

  // const AddToCart = (singleProduct) => {
  //   // const exist = cart.find((item) => item.product_id === product.product_id);
  //   // console.log(singleProduct);
  //   setCart([...cart, singleProduct]);
  //   console.log(cart);
  // };

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/products/product/${params.id}`);
      const data = await res.json();

      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div>
      <Header />
      {product.map((singleProduct) => {
        return (
          <div className='product-wrapper' key={singleProduct.product_id}>
            <img className='product-img' src={singleProduct.product_image} />

            <div>
              <h2 className='product-title'>{singleProduct.product_name}</h2>
              <p>{singleProduct.product_price}</p>
              {/* <BtnAddToCart product={singleProduct} /> */}
              <p>{singleProduct.product_description}</p>
              {/* <button onClick={() => AddToCart(singleProduct)}>
                Add to Cart
              </button> */}
              <button onClick={() => onAdd(singleProduct)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
