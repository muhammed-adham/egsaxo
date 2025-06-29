import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={product.imageUrl} alt={product.name} className="product-card__image" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{product.price} EGP</p>
        <button className="product-card__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard; 