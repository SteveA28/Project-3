import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider
import Cart from './components/Cart';
import Home from './components/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <>
      <CartProvider> {/* Wrap your app with CartProvider */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route> {/* Ensure you have a Cart route */}
            <Route path="signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
