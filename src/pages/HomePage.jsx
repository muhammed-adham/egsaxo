import React from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Filters />
      <ProductList />
    </div>
  );
};

export default HomePage; 