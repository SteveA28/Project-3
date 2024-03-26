import React from "react";
import { useCart } from "../contexts/CartContext"; // Adjust the import path as necessary
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";

const Cart = () => {
  const { cartItems, removeFromCart, updateDateRange } = useCart();

  const handleDateChange = (dates, index) => {
    const [start, end] = dates;

    // Check if the range is exactly 4 days (3 nights)
    if (start && end && Math.abs(end - start) === 3 * 24 * 60 * 60 * 1000) {
      updateDateRange(index, start, addDays(end, 1)); // Adjusting end date as addDays is inclusive
    } else if (start && !end) {
      // Automatically set end date to 3 days after start if only start date is selected
      updateDateRange(index, start, addDays(start, 3));
    }
    // If the selection does not meet criteria, you might reset or do nothing
    // This example automatically sets the end date, ensuring the range is always 4 days
  };

  return (
    <div className="cart-container mt-[80px]  ">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="cart-item flex justify-between items-center mb-[20px]"
          >
            <div className="cart-item-image-container flex items-center">
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
                <h5 className="font-bold">{item.packageType}</h5>{" "}
                {/* Make sure the title is visible */}
                <p>${item.packagePrice}</p>
              </div>
            </div>
            <div className="cart-item-info">
              {/* Date picker container to adjust position */}
              <div className="date-picker-container">
                <DatePicker
                  className="bg-blue-500"
                  selected={item.startDate}
                  onChange={(dates) => handleDateChange(dates, index)}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  selectsRange
                  inline
                />
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
