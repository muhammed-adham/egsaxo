import React from 'react';
import './Badge.css';

const Badge = ({ product, xl = false }) => {
  if (!product) return null;

  const badgeStatus =
    product.price_sale !== null
      ? 'on-sale'
      : product.quantity === 0
      ? 'sold-out'
      : product.quantity <= 2
      ? 'limit-stock'
      : 'badge-disable';

  const className = `product-badge ${badgeStatus}${xl ? ' product-badge-xl' : ''}`;

  const badgeLabel =
    product.price_sale !== null
      ? 'Sale'
      : product.quantity === 0
      ? 'Sold Out'
      : product.quantity <= 2
      ? 'Limited'
      : null;

  if (!badgeLabel) return null;

  return <div className={className}>{badgeLabel}</div>;
};

export default Badge;
