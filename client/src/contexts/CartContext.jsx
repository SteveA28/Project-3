import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Adds an item to the cart with initial `startDate` and `endDate` set to null
    setCartItems(currentItems => [...currentItems, { ...item, startDate: null, endDate: null }]);
  };

  const removeFromCart = (index) => {
    // Removes an item from the cart based on its index
    setCartItems(currentItems => currentItems.filter((_, i) => i !== index));
  };

  const updateDateRange = (index, startDate, endDate) => {
    // Updates the date range for a specific item in the cart
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
