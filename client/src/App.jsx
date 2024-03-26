import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Import the CartProvider
import { AuthProvider } from "./contexts/AuthContext"; // Import the AuthProvider
import Cart from "./components/Cart";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PackageDetails from "./components/PackageDetails";
import ContactUs from "./components/ContactUs"; // Import the ContactUs component

function App() {
  return (
    <AuthProvider> {/* Wrap everything within AuthProvider */}
      <CartProvider> {/* Wrap your app with CartProvider */}
        <BrowserRouter>
          <Navbar /> {/* Navbar will now have access to AuthContext and CartContext */}
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} /> {/* Ensure you have a Cart route */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<PackageDetails />} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* Add the route for ContactUs */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
