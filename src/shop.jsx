import React from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import Hm from "./assets/Frame 12561.png"
import Fr from "./assets/Frame 12622.png"
import Ok from "./assets/Frame 12692.png"

function Shop() {
  return (
    <div className=" flex flex-col items-center justify-center " id="shop">
      <div
        className="bg w-screen h-[60vh]  flex flex-col items-center justify-center
      bg-[linear-gradient(rgba(0,0,0,0.01),rgb(0,0,0,0.01)),url('./assets/image37.png')] bg-cover bg-no-repeat bg-top text-white"
      >
        <h1 className=" font-bold text-5xl">Shop List</h1>
        <div className=" flex items-center justify-around w-[25vw] text-xl ">
          <Link to="/">Home</Link>
          <Link to="/product">Single product</Link>
          <Link to="/cart">Cart Page</Link>
        </div>
      </div>

      <div className="h-[240vh] flex flex-col items-center justify-around w-[90vw] ">
        <div className=" flex items-center justify-between w-[80vw] text-3xl font-bold h-[30vh]">
          <h2>Showing 1-12 of 20</h2>

          <div className=" flex items-center justify-center border-[1px] border-black ">
            <input
              type="search"
              name=""
              id=""
              className="border-[1px] bg-transparent"
            />
            <button>
              <MdSearch />
            </button>
          </div>
        </div>

        <div className="h-[210vh] flex flex-col items-center justify-around ">
          <div className=" flex w-[90vw] items-center justify-center">
            <img src={Hm} alt="" className="w-[10vw] h-[40vh]" />
            <img src={Fr} alt="" className="w-[70vw] h-[40vh]" />
          </div>
          <img src={Ok} alt="" className="w-[80vw] h-[40vh]" />
          <img src={Ok} alt="" className="w-[80vw] h-[40vh]" />
          <img src={Ok} alt="" className="w-[80vw] h-[40vh]" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
