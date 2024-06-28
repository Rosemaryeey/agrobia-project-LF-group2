import React from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import Apple from "./assets/apple.png"
import Star from "./assets/Frame 12598.png"

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

      <div className="h-[260vh] flex flex-col items-center justify-around w-[90vw] ">
        <div className=" flex items-center justify-between w-[80vw]  h-[30vh]">
          <h2 className="text-3xl font-bold">Showing 1-12 of 20</h2>

          <div className=" flex items-center justify-start ">
            <input
              type="search"
              name=""
              id=""
              className="bg-transparent py-3 px-14 border-2 border-green-700  rounded-xl  "
            />
            <button>
              <MdSearch className="text-2xl relative right-9" />
            </button>
          </div>
        </div>

        <div className="h-[240vh] flex flex-col items-center justify-around  ">
          <div className=" flex w-[90vw] items-center justify-around">
            <Link
              to="/product"
              className=" out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col   flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
          </div>
          <div className=" flex w-[90vw] items-center justify-around">
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
          </div>
          <div className=" flex w-[90vw] items-center justify-around">
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
          </div>
          <div className=" flex w-[90vw] items-center justify-around">
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col  flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col   flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col   flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
            <Link
              to="/product"
              className="out w-[18vw] h-[23vw] flex-col   flex items-center justify-around shadow-black shadow-md"
            >
              <img src={Apple} alt="" className="w-[15vw]" />
              <img src={Star} alt="" />
              <h1>Apple</h1>
              <p>$14.00</p>
            </Link>
          </div>

          <div className="w-[20vw]  h-10 flex items-center justify-evenly">
            <Link
              to="/shop"
              className="out w-5 h-5 rounded-full border-2 border-black flex items-center justify-center"
            >
              1
            </Link>
            <Link
              to="/shop"
              className="out w-5 h-5 rounded-full border-2 border-black flex items-center justify-center"
            >
              2
            </Link>
            <Link
              to="/shop"
              className="out w-5 h-5 rounded-full border-2 border-black flex items-center justify-center"
            >
              3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
