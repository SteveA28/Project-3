import React from "react";
import { useCart } from "../contexts/CartContext"; // Adjust the import path as necessary
import DatePicker from './DatePicker'; // Adjust this path to where your DatePicker component is located

const Cart = () => {
  const { cartItems, removeFromCart, updateDateRange } = useCart();

  const handleDateChange = (newDate, index) => {
    // Assuming updateDateRange can handle updating based on the item index and the new date
    updateDateRange(newDate, index);
  };

  return (
    <div className="cart-container mt-[80px]">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="cart-item flex justify-between items-center mb-[20px]"
          >
            <div className="cart-item-image-container w-[300px] flex items-center">
              <img
                src={item.img}
                alt=""
                className="cart-item-image"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "15px",
                }}
              />
              <div>
                <h5 className="font-bold">{item.packageType}</h5>
                <p>{item.packagePrice}</p>
              </div>
            </div>
            <div className="cart-item-info">
              <div className="date-picker-container">
                <DatePicker onDateChange={(newDate) => handleDateChange(newDate, index)} />
              </div>
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
