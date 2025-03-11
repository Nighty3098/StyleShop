import React, { useState } from 'react';
import Product from '../components/Product';
import productsData from '../data/products.json';

const Catalog = ({ addToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get all products from JSON file
  const allProducts = productsData.allProducts;
  
  // Filter products based on active category
  const filteredProducts = activeFilter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'tops', name: 'Tops' },
    { id: 'pants', name: 'Pants' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' }
  ];

  return (
    <div className="catalog-page">
      <h1 className="catalog-title">Clothing Catalog</h1>
      
      {/* Filters */}
      <div className="catalog-filters">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Product list */}
      <div className="product-list">
        {filteredProducts.map(product => (
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

export default Catalog; 
