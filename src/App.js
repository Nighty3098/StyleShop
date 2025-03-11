import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import New from './pages/New';
import Sale from './pages/Sale';
import About from './pages/About';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  
  return (
    <Router>
      <div className="app">
        <Header cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
        <main>
          {showCart ? (
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart}
              setCartItems={setCartItems}
            />
          ) : (
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
              <Route path="/new" element={<New addToCart={addToCart} />} />
              <Route path="/sale" element={<Sale addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
