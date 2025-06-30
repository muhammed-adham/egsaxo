import React from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import AltoSaxo from '../components/AltoSaxo';

const HomePage = () => {
  return (
    <div>
      <AltoSaxo/>
      <Hero />
      <Filters />
      <ProductList />
    </div>
  );
};

export default HomePage; 