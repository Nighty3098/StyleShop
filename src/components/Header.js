import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
          <div className="mobile-cart-icon" onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
          
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/catalog" onClick={() => setIsMenuOpen(false)}>Catalog</Link></li>
            <li><Link to="/new" onClick={() => setIsMenuOpen(false)}>New</Link></li>
            <li><Link to="/sale" onClick={() => setIsMenuOpen(false)}>Sale</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li className="desktop-cart-icon">
              <div className="cart-icon" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} />
                {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
