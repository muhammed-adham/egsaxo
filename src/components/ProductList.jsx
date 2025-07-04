import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const dummyProducts = [
  { id: 1, name: 'Alto Reeds', price: '350', imageUrl: './Products/10634512_800.jpg' },
  { id: 2, name: 'Tenor Strap', price: '500', imageUrl: './Products/10382675_800.jpg' },
  { id: 3, name: 'Cork Grease', price: '150', imageUrl: './Products/10839031_800.jpg' },
  { id: 4, name: ' Cleaning Brush', price: '250', imageUrl: './Products/11522249_800.jpg' },
  { id: 5, name: 'Alto Reeds', price: '350', imageUrl: './Products/11522264_800.jpg' },
  { id: 6, name: 'Tenor Strap', price: '500', imageUrl: './Products/10634512_800.jpg' },
  { id: 7, name: 'Cork Grease', price: '150', imageUrl: './Products/10634512_800.jpg' },
  { id: 8, name: 'Cleaning Brush', price: '250', imageUrl: './Products/10634512_800.jpg' },
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