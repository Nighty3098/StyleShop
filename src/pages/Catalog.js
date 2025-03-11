import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';
import productsData from '../data/products.json';

const Catalog = ({ addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();

  // Categories array
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops' },
    { id: 'pants', name: 'Pants' },
    { id: 'skirts', name: 'Skirts' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'accessories', name: 'Accessories' }
  ];

  // Filter products when category changes
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const categoryFromUrl = query.get('category');
    
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
    
    filterProducts(categoryFromUrl || activeCategory);
  }, [location, activeCategory]);

  const filterProducts = (category) => {
    if (category === 'all') {
      setFilteredProducts(productsData.allProducts);
    } else {
      setFilteredProducts(
        productsData.allProducts.filter(product => product.category === category)
      );
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterProducts(category);
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Catalog</h1>
        <p>Discover our unique collection of premium clothing and accessories</p>
      </div>
      
      <div className="filter-container">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Product 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog; 
