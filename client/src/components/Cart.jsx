import React from 'react';
import { useCart } from '../contexts/CartContext'; // Adjust the import path as necessary

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item flex justify-between items-center">
            <img src={item.img} alt="" className="cart-item-image" />
            <div className="cart-item-info">
              <h5>{item.packageType}</h5>
              <p>{item.packagePrice}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="remove-item-btn bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
