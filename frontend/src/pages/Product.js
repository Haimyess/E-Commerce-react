/** @format */

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import BtnAddToCart from "../components/BtnAddToCart";

function Product() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`api/products/${id}`);
      const data = await res.json();

      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <>
      <h1>{id}</h1>

      {product.map((product) => {
        return (
          <div className='product-wrapper' key={product.product_id}>
            <img className='product-img' src={product.product_image} />
            <div>
              <h2 className='product-title'>{product.product_name}</h2>
              <p>{product.product_price}</p>
              <BtnAddToCart />
              <p>{product.product_description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
