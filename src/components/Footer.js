import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ABOUT LUXE</h3>
          <p>LUXE is your perfect luxury clothing store featuring collections from the best designers around the world.</p>
        </div>
        
        <div className="footer-section">
          <h3>Information</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery & Payment</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Fashion Street, 123</p>
          <p>Moscow, Russia</p>
          <p>Tel.: +7 (123) 456-7890</p>
          <p>Email: info@luxe.ru</p>
        </div>
      </div>
      
      <div className="copyright">
        &copy; 2023 LUXE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 
