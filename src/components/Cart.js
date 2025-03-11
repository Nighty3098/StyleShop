import React from 'react';

const Cart = ({ cartItems, removeFromCart, setCartItems }) => {
  // Price formatting
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  };

  // Update product quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      ));
    }
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-empty">Your cart is empty. Please add products from the catalog.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      
      {cartItems.map(item => (
        <div key={item.id} className="cart-item" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <img 
            src={item.image} 
            alt={item.title} 
            className="cart-item-image" 
          />
          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.title}</h3>
            <p className="cart-item-price">{formatPrice(item.price)}</p>
          </div>
          </div>
          <div className="cart-item-actions">
            <div className="quantity-control">
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button 
              className="remove-btn" 
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>{formatPrice(totalAmount)}</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart; 
