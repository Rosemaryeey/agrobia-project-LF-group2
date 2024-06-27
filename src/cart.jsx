import React from 'react'
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className=" flex flex-col items-center justify-center " id="cart">
      <div
        className="bg w-screen h-[60vh]  flex flex-col items-center justify-center
      bg-[linear-gradient(rgba(0,0,0,0.01),rgb(0,0,0,0.01)),url('./assets/image37.png')] bg-cover bg-no-repeat bg-top text-white"
      >
        <h1 className=" font-bold text-5xl"> Cart Page</h1>
        <div className=" flex items-center justify-around w-[20vw] text-xl ">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/product">Single Product</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart