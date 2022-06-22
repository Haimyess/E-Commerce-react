/** @format */

import { useEffect, useState } from "react";

const Grid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products/all");
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <h2>Grid of categories</h2>
      {products.map((product) => {
        return <li>{product.product_type}</li>;
      })}
    </>
  );
};

export default Grid;
