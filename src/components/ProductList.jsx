import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const dummyProducts = [
  { id: 1, name: 'Alto Saxophone Reeds', price: '350', imageUrl: 'https://placehold.co/400x400/d50023/1a1a1a?text=Reeds' },
  { id: 2, name: 'Tenor Saxophone Strap', price: '500', imageUrl: 'https://placehold.co/400x400/d50023/1a1a1a?text=Strap' },
  { id: 3, name: 'Cork Grease', price: '150', imageUrl: 'https://placehold.co/400x400/d50023/1a1a1a?text=Grease' },
  { id: 4, name: 'Saxophone Cleaning Brush', price: '250', imageUrl: 'https://placehold.co/400x400/d50023/1a1a1a?text=Brush' },
  // Add more products as needed
];

const ProductList = () => {
  // In a real app, you would filter these products based on the state from the Filters component
  const products = dummyProducts;

  return (
    <section className="product-list-container">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList; 