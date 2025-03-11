import React from 'react';
import productsData from '../data/products.json';

const Sale = ({ addToCart }) => {
  // Get sale products from JSON file
  const saleProducts = productsData.saleProducts;

  // Price formatting with spaces and currency
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  };

  return (
    <div className="sale-page">
      <div className="sale-banner">
        <h1>SALE</h1>
        <p>Up to 50% off selected items</p>
      </div>
      
      <div className="sale-info">
        <h2>Seasonal Sale</h2>
        <p>
          Don't miss the chance to purchase stylish items from past collections at special prices.
          Limited quantities available!
        </p>
      </div>
      
      <div className="product-list">
        {saleProducts.map(product => (
          <div key={product.id} className="product-card sale-card">
            <div className="discount-badge">-{product.discount}%</div>
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image" 
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="price-container">
                <p className="product-price">{formatPrice(product.price)}</p>
                <p className="original-price">{formatPrice(product.originalPrice)}</p>
              </div>
              <button 
                className="add-to-cart" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale; 
