/** @format */

import React from "react";
import { Link } from "react-router-dom";

function BtnAddToCart() {
  return (
    <>
      <Link className='add-btn' to={""}>
        {" "}
        Add to cart
      </Link>
    </>
  );
}

export default BtnAddToCart;
