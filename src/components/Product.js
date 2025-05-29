import React from 'react';
import PropTypes from 'prop-types';
import { ProductPropTypes } from './propTypes';

const Product = ({ product, addToCart }) => {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image" 
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button 
          className="add-to-cart" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = ProductPropTypes;

export default Product; 
