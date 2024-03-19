import React, { useState } from 'react';

export default function Cart() {
    const [items, setItems] = useState([
      { id: 1, name: 'Bahamas Bundle 1', price: 499.99 },
      { id: 2, name: 'Caribbean Bundle 2', price: 499.99 },
      { id: 3, name: 'Hawaii Bundle 3', price: 499.99 },
      { id: 4, name: 'Alaska Bundle 4', price: 499.99 },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div >
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toFixed(2)}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}

            <h3>Add more bundles</h3>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
