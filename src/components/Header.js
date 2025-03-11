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
        
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/catalog">CATALOG</Link></li>
            <li><Link to="/new">NEW</Link></li>
            <li><Link to="/sale">SALE</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li>
              <div className="cart-icon" onClick={toggleCart}>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .burger-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 20px;
            cursor: pointer;
            z-index: 1000;
          }

          .burger-bar {
            width: 100%;
            height: 3px;
            background-color: #000;
            transition: all 0.3s ease-in-out;
          }

          .burger-bar.open:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }

          .burger-bar.open:nth-child(2) {
            opacity: 0;
          }

          .burger-bar.open:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
          }

          .navigation {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: white;
            padding: 80px 20px;
            transition: right 0.3s ease-in-out;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          }

          .navigation.open {
            right: 0;
          }

          .nav-links {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links li {
            margin: 15px 0;
            width: 100%;
          }

          .nav-links a {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 769px) {
          .burger-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
