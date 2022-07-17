/** @format */

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Filter from "./Filter";
// import BtnAddToCart from "../components/BtnAddToCart";

// Importing styles
import "./styles/Category.css";

export const Category = ({ onAdd }) => {
  const [products, setProducts] = useState([]);

  // const [image, setImage] = useState("");
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`/api/products/${params.type}`);
        const data = await res.json();
        // const unique = data.filter(
        //   (productType, index) =>
        //     data.findIndex((object) => object.value === productType.value) !==
        //     index
        // );
        // console.log(unique);
        setProducts(data);

        // setImage(data.product_image);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />

      <h1 className='category-name'>{params.type}</h1>
      <div className='category-wrapper'>
        <aside>
          <h2>Brands</h2>
          {products.map((brand) => {
            return (
              <div>
                <input type='checkbox' />
                <label>{brand.product_brand}</label>
              </div>
            );
          })}

          <h2>Type</h2>
          {/* <label htmlFor={} ></label> */}
          <select>
            {products.map((type) => {
              <option value={type.product_subcategories}>
                {type.product_subcategories}
              </option>;
            })}
          </select>
        </aside>
        {products.map((product) => {
          {
            /* console.log(product); */
          }
          return (
            <div className='product-card' key={product.product_id}>
              <Link to={`/product/${product.product_id}`}>
                <img className='img-card' src={product.product_image} />
                <h3 className='title-card'>{product.product_type}</h3>
              </Link>
              <p>{product.product_name}</p>
              <p>{product.product_description}</p>
              <p>${product.product_price}$</p>
              <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
