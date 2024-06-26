import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "./login";
// import Signup from "./signup";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./home";
import Product from "./product";
import Shop from "./shop";
import Cart from "./cart";
// import Addtocart from "./addtocart";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartItems(cartItems + quantity);
  };
  

  return (
    <div>
      <Header cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={<Product onAddToCart={handleAddToCart} />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        {/* <Route path="/addtocart" element={<Addtocart />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
