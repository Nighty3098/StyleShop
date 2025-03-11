import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const Home = ({ addToCart }) => {
  // Get featured products from all products
  const featuredProducts = productsData.allProducts.filter(product => product.featured);

  // Price formatting with spaces and currency
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  };

  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1>LUXURY IN EVERY DETAIL</h1>
          <p>Discover our exclusive collections created by world-renowned designers</p>
          <Link to="/catalog" className="hero-button">SHOP NOW</Link>
        </div>
      </section>
      
      {/* Features section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">✨</div>
          <h3>Premium Quality</h3>
          <p>We select only the highest quality materials for our collections</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Delivery to any city in Russia within 1-3 days</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💯</div>
          <h3>Satisfaction Guarantee</h3>
          <p>14-day return policy for any purchases</p>
        </div>
      </section>
      
      {/* Featured products */}
      <section className="featured-products">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured-products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product">
              <img src={product.image} alt={product.title} />
              <div className="featured-product-info">
                <h3>{product.title}</h3>
                <p className="featured-product-price">{formatPrice(product.price)}</p>
                <button 
                  className="add-to-cart-featured"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/catalog" className="view-all-button">VIEW ALL</Link>
        </div>
      </section>
      
      {/* Categories */}
      <section className="categories">
        <h2>CATEGORIES</h2>
        <div className="categories-grid">
          <Link to="/catalog?category=women" className="category">
            <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" alt="Women's clothing" />
            <h3>WOMEN'S CLOTHING</h3>
          </Link>
          <Link to="/catalog?category=men" className="category">
            <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Men's clothing" />
            <h3>MEN'S CLOTHING</h3>
          </Link>
          <Link to="/catalog?category=accessories" className="category">
            <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Accessories" />
            <h3>ACCESSORIES</h3>
          </Link>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>Receive exclusive offers and updates on the latest collections</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 
