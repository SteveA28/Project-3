import React, { useState } from 'react';

export default function Cart() {
    const [cart, setCart] = useState([]);

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                <div>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-info">
                                    {item.name} - ${item.price.toFixed(2)}
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-item">Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <span>Total: ${totalPrice.toFixed(2)}</span>
                        <button onClick={clearCart} className="clear-cart">Clear Cart</button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}
