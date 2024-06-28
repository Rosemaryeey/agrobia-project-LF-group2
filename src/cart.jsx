import React from 'react'
import { Link } from 'react-router-dom';
import A from  "./assets/apple.png"
import B from "./assets/ok7.png"
import C from "./assets/nice2.jpeg"

const Cart = ({ cartItems }) => {
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

      <div className="h-[100vh] flex flex-col items-center justify-around">
        <h1 className=" text-3xl flex ">
          {cartItems > 0 && (
            <span className="  w-8 h-8    flex items-center justify-center">
              {cartItems}
            </span>
          )}
          IN THE CART
        </h1>

        <div className=" flex item-center flex-col  justify-around w-[70vw] h-[70vh] border-2 ">
          <div className="flex item-center justify-around w-[70vw] font-bold border-b-2">
            <h2>PRODUCT NAME</h2>
            <h2>PRICE</h2>
            <h2>QUANTITY</h2>
            <h2> TOTAL</h2>
          </div>
          <div className="flex item-center justify-around w-[70vw] border-b-2 h-[15vh] ">
            <div className="h-[5vh]">
              <img src={A} alt="" className="w-[5vw]" />
              <h2>APPLE</h2>
            </div>
            <h2 className=" flex items-center">$8.00</h2>
            <div className="flex w-[3vw] ">
              <h2 className="flex w-[3vw] items-center justify-around">
                -{" "}
                {cartItems > 0 && (
                  <span className="  w-4 h-4  bg-slate-300 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}{" "}
                +
              </h2>
            </div>
            <h2 lassName=" flex items-center">$4.00</h2>
          </div>
          <div className="flex item-center justify-around w-[70vw] border-b-2 h-[15vh]">
            <div className="h-[5vh]">
              <img src={B} alt="" className="w-[5vw]" />
              <h2>MEAT</h2>
            </div>
            <h2 lassName=" flex items-center">$4.00</h2>
            <div className="flex w-[3vw]">
              <h2 className="flex w-[3vw] items-center justify-around">
                -{" "}
                {cartItems > 0 && (
                  <span className="  w-4 h-4  bg-slate-300 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}{" "}
                +
              </h2>
            </div>
            <h2 lassName=" flex items-center">$8.00</h2>
          </div>{" "}
          <div className="flex item-center justify-around w-[70vw] h-[15vh]">
            <div className="h-[5vh] flex flex-col items-center justify-center">
              <img src={C} alt="" className="w-[5vw]" />
              <h2>RICE</h2>
            </div>
            <h2 lassName=" flex items-center">$4.00</h2>
            <div className="flex w-[3vw] items-center">
              <h2 className="flex w-[3vw] h-[20vh] items-center justify-around">
                -{" "}
                {cartItems > 0 && (
                  <span className="  w-4 h-4  bg-slate-300 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}{" "}
                +
              </h2>
            </div>
            <h2>$4.00</h2>
          </div>
        </div>
        <button className='bg-orange-700 py-3 px-5 relative left-[30vw]'>Proceed Payment</button>
      </div>
    </div>
  );
};

export default Cart