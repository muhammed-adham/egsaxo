import React from "react";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Banner from "../components/Banner";

const Shop = () => {
  return (
    <>
      <Banner />
      <Filters />
      <ProductList />
    </>
  );
};

export default Shop;
