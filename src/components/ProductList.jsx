import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import data from '../assets/data/data.json'

const ProductList = ({ selectedSaxType, activeAccessory }) => {
  const products = data?.products;

  const filteredProducts = products?.filter(product => {
    const matchesSax = selectedSaxType === 'All' || product.Instrument?.includes(selectedSaxType);
    const matchesAccessory = activeAccessory === 'All' || (product.category && product.category.toLowerCase() === activeAccessory.toLowerCase());
    return matchesSax && matchesAccessory;
  });

  return (
    <section className="product-list-container">
      <div className="product-grid">
        {filteredProducts?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList; 