import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../assets/data/data.json';
import './ProductPage.css';
import Badge from '../components/Badge';
import BtnPrimary from '../components/BtnPrimary';
import BtnOutline from '../components/BtnOutline';
import { BsStars } from 'react-icons/bs';
import ModalOverlay from '../components/ModalOverlay';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showRequestModal, setShowRequestModal] = useState(false);

  const product = data?.products?.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.quantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', { product, quantity });
  };

  const handleBuyNow = () => {
    // TODO: Implement direct purchase
    console.log('Buy now:', { product, quantity });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="product-page-loading">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/shop')} className="back-to-shop-btn">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="product-page-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <button onClick={() => navigate('/shop')} className="breadcrumb-link">
            Shop
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.title}</span>
        </nav>

        <div className="product-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image-container">
              <img
                src={product.image[selectedImage]}
                alt={product.title}
                className="main-image"
              />
              <Badge product={product} xl={true} />
            </div>
            {product.image.length > 1 && (
              <div className="image-thumbnails">
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="product-details">
            <div className="product-header">
              <div className="brand-logo">
                <img src={product.brand} alt="Brand" />
              </div>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-subtitle">{product.sub_title}</p>
            </div>

            <div className="product-price">
              {product.price_sale ? (
                <div className="price-container">
                  <span className="original-price">{formatPrice(product.price)}</span>
                  <span className="sale-price">{formatPrice(product.price_sale)}</span>
                  <span className="discount-badge">
                    {Math.round(((product.price - product.price_sale) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="current-price">{formatPrice(product.price)}</span>
              )}
            </div>

            <div className="product-specs">
              <div className="spec-item">
                <span className="spec-label">Category:</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Compatible with:</span>
                <div className="spec-value">
                  {product.Instrument.map((instrument, index) => (
                    <span key={index} className="instrument-tag">
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-description">
              <h3>Product Description</h3>
              <ul className="description-list">
                {product.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="stock-info">
                <span className="stock-label">Stock:</span>
                <span className={`stock-amount ${product.quantity === 0 ? 'out-of-stock' : product.quantity <= 2 ? 'low-stock' : ''}`}>
                  {/* {product.quantity === 0 ? 'Out of Stock' : `${product.quantity} ${product.quantity === 1 ? 'item' : 'items'} available`} */}
                  {product.quantity === 0 ? 'Out of Stock' : product.quantity <= 2 ? `${product.quantity} ${product.quantity === 1 ? 'item' : 'items'} Available` : `Available`}
                </span>
              </div>

              {product.quantity > 0 && (
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      min="1"
                      max={product.quantity}
                      className="quantity-input"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.quantity}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="action-buttons">
                {/* <button
                  onClick={handleAddToCart}
                  disabled={product.quantity === 0}
                  className="add-to-cart-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button> */}

                <BtnOutline
                  disabled={product.quantity === 0}
                  label={
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </>
                  } />

                <BtnPrimary showIcon={false} label={product.quantity === 0 ? 'Out of Stock' : 'Buy Now'} disabled={product.quantity === 0} />

                {/* Request Availability Button (only when out of stock) */}
                {product.quantity === 0 && (
                  <BtnPrimary
                    showIcon={false}
                    label="Bring it back"
                    onClick={() => setShowRequestModal(true)}
                  />
                )}
              </div>
            </div>

            {/* <div className="product-features">
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>Free Shipping</span>
              </div>
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>30-Day Returns</span>
              </div>
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>Warranty Included</span>
              </div>
            </div> */}
          </div>
        </div>
        <hr />
        {/* Related Products Section */}
        {data?.products
          ?.filter(p => p.id !== product.id && p.category === product.category)
          ?.slice(0, 4)?.length > 0 && (
            <div className="related-products">
              <h2>You might also like</h2>
              <div className="related-products-grid">
                {data?.products
                  ?.filter(p => p.id !== product.id && p.category === product.category)
                  ?.slice(0, 4)
                  ?.map(relatedProduct => (
                    <div
                      key={relatedProduct.id}
                      className="related-product-card"
                      onClick={() => (navigate(`/product/${relatedProduct.id}`), scroll(0, 0), setSelectedImage(0))}
                    >
                      <img src={relatedProduct.image[0]} alt={relatedProduct.title} />
                      <h4>{relatedProduct.sub_title}</h4>
                      <p>{formatPrice(relatedProduct.price)}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
      </div>
      {/* Modal Overlay for Request Availability */}
      {showRequestModal && (
        <ModalOverlay title={"Want it back?"} msg={"Let us know, and we’ll bring it back just for you and will notify you the moment it's available again."} cta={"Bring it back"} onClose={() => setShowRequestModal(false)} />
      )}
    </div>
  );
};

export default ProductPage; 