import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import VanillaTilt from "vanilla-tilt";
import Badge from "./Badge";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".product-card")),
      {
        max: 25,
        speed: 300,
        glare: true,
        "glare-prerender": true,
      };
  }, []);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
    scroll(0,0)
  };
  return (
    <div className="card-container">
      <div
        className="product-card"
        data-tilt
        data-tilt-glare
        data-tilt-max-glare="0.8"
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
      >
        {/* {!product.badge ? null : (
          <div className="card-badge">{product.badge}</div>
        )} */}
        
        <Badge product={product}/>

        <div className="product-card__brand">
          <img src={product.brand} alt="" />
        </div>
        <div className="product-card__image-container">
          <img
            src={product.image[0]}
            alt={product.title}
            className="product-card__image"
          />
        </div>
        <div className="product-card__info">
          <h3 className="product-card__name">{product?.sub_title}</h3>
          <p className="product-card__price">{product.price} EGP</p>
          {/* <button className="product-card__button" onClick={(e) => { e.stopPropagation(); handleCardClick(); }}>
            View Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
