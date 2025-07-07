import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import data from '../assets/data/data.json'
import { GiSaxophone } from 'react-icons/gi';
import Page404 from './Page404';

const ProductList = ({ selectedSaxType, activeAccessory }) => {
  const products = data?.products;

  const filteredProducts = products?.filter(product => {
    const matchesSax = selectedSaxType === 'All' || product.Instrument?.includes(selectedSaxType);
    const matchesAccessory = activeAccessory === 'All' ||
      product.category?.toLowerCase() === activeAccessory.toLowerCase().replace(/&/g, '_').replace(/ /g, '');
    return matchesSax && matchesAccessory;
  });

  return (
    <section className="product-list-container">
      {filteredProducts.length === 0 ?
        <Page404/>
        :
        <div className="product-grid">
          <div className="grid-header">
            <div className="results-count">
              <span className="note-symbol">♪</span>
              <span>{filteredProducts.length} soulpiece{filteredProducts.length !== 1 ? 's' : ''} found</span>
            </div>
            <div className="sort-indicator">
              <span>🎯 Curated for musicians</span>
            </div>
          </div>

          {filteredProducts?.map((product, index) => (
            <div key={product.id} className="product-card-wrapper" style={{ '--delay': `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      }
    </section>
  );
};

export default ProductList; 