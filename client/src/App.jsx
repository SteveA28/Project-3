import React, { useState } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Project 3</h1>
      <Cart />
      <Home />
      <Signup />
    </>
  );
}

export default App;
