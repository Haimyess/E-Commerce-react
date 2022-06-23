/** @format */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./categories.css";

function Categories() {
  const [products, setProducts] = useState([]);
  //   console.log(products);
  //   const [filterProducts, setFilterProducts] = useState(2);
  console.log(filterProducts);

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
      {/* <div className='main-wrapper'>
        <aside className='categories-filter'> */}
      {/* <ul>
        <li>Hola</li>
        <li>Priviet</li>
        <li>Shalom</li>
      </ul> */}
      {/* </aside> */}
      <div className='categories-wrapper'>
        {products
          .filter()

          .map((product) => {
            {
              /* console.log(product); */
            }
            return (
              <div key={product.product_id} className='category-card'>
                <Link to='/category/:id'>
                  <li>{product.product_type}</li>
                  <img className='category-img' src={product.product_image} />
                </Link>
              </div>
            );
          })}
      </div>
      {/* </div> */}
    </>
  );
}

export default Categories;
