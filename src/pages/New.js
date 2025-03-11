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
      
      <div className="new-collection-info">
        <h2>Winter Collection 2024/2025</h2>
        <p>
          Introducing our new winter collection that combines elegance,
          comfort, and practicality. Each piece is created with attention to detail 
          and using high-quality materials to emphasize your individuality.
        </p>
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
