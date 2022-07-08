/** @format */

import React, { useEffect, useState } from "react";

import "./styles/Category.css";

import { useParams } from "react-router-dom";

import BtnAddToCart from "../components/BtnAddToCart";
import Header from "../components/Header";

function Product() {
  const [product, setProduct] = useState([]);

  const params = useParams();

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
              <BtnAddToCart />
              <p>{singleProduct.product_description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
