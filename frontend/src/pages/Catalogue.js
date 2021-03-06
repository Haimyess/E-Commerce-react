/** @format */

import react from "react";

import MainProducts from "../components/catalogue/MainProducts";
import Header from "../components/Header";
import Categories from "./Categories";

import "./categories.css";

function Catalogue() {
  return (
    <>
      <Header />
      <div className='catalogue-wrapper'>
        <Categories />
      </div>

      {/* <h1>This are all the products</h1>
    {
      .map(product => {

      })
    } */}
    </>
  );
}

export default Catalogue;
