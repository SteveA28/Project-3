import React, { useState } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Cart />
      <Home />
      <Signup />
    </>
  );
}

export default App;
