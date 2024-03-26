// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(currentItems => [...currentItems, { ...item, startDate: null, endDate: null }]);
  };

  const removeFromCart = (index) => {
    setCartItems(currentItems => currentItems.filter((_, i) => i !== index));
  };

  const updateDateRange = (index, startDate, endDate) => {
    setCartItems(currentItems =>
      currentItems.map((item, i) =>
        i === index ? { ...item, startDate, endDate } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateDateRange }}>
      {children}
    </CartContext.Provider>
  );
};
