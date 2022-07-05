/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export const Category = () => {
  const [products, setProducts] = useState([]);

  // const [image, setImage] = useState("");
  const params = useParams();
  console.log(params);

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

      <h1>{params.type}</h1>

      {products.map((product) => {
        console.log(product);
        return (
          <div key={product.product_id} className='category-card'>
            <img className='category-img' src={product.product_image} />
            <h3>{product.product_type}</h3>
            <p>{product.product_price}</p>
            <p>{product.product_description}</p>
          </div>
        );
      })}
    </>
  );
};
