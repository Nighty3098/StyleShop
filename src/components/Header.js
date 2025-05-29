import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { HeaderPropTypes } from './propTypes';

const Header = ({ cartItemsCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">LUXE</Link>
        
        <div className="mobile-controls">
          <button className="mobile-cart-icon" onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </button>
          
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/catalog" onClick={() => setIsMenuOpen(false)}>Catalog</Link></li>
            <li><Link to="/new" onClick={() => setIsMenuOpen(false)}>New</Link></li>
            <li><Link to="/sale" onClick={() => setIsMenuOpen(false)}>Sale</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li className="desktop-cart-icon">
              <button className="cart-icon" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} />
                {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = HeaderPropTypes;

export default Header;
