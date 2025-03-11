import React from 'react';
import Product from '../components/Product';
import productsData from '../data/products.json';

const New = ({ addToCart }) => {
  // Get new products from JSON file
  const newProducts = productsData.newProducts;
  
  // Sort by date (newest first)
  const sortedProducts = [...newProducts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  };

  return (
    <div className="new-page">
      <div className="new-banner">
        <h1>New Arrivals</h1>
        <p>Discover the latest additions to our collection</p>
      </div>      
      <div className="product-list">
        {sortedProducts.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default New; 
