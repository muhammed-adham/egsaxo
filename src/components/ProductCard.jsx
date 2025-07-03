import React, { useEffect } from "react";
import "./ProductCard.css";
import VanillaTilt from "vanilla-tilt";

const ProductCard = ({ product }) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".product-card")),
      {
        max: 25,
        speed: 300,
        glare: true,
        "glare-prerender": true,
      };
  }, []);
  return (
    <div
      className="product-card"
      data-tilt
      data-tilt-glare
      data-tilt-max-glare="0.8"
    >
      <div className="product-card__image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__image"
        />
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
