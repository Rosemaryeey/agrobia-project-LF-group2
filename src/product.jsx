import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ig from "./assets/apple.png";
import Mg from "./assets/Frame 12598.png";
import Ap from "./assets/image 60.png";
import Pl from "./assets/image 61.png";
import Ci from "./assets/instagram.png";
import So from "./assets/Component 1.png";
import Al from "./assets/twitter.png";

const Product = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //   const handleAddToCart = () => {
  //   onAddToCart(quantity);
  // };


  const handleAddToCart = () => {
  alert(`Added ${onAddToCart(quantity)} item(apple) to cart`);
  };

   const handleAddToCar = () => {
      (`Added ${onAddToCart(quantity)} item(apple) to cart`);
    };
  return (
    <div className=" flex flex-col items-center justify-center " id="product">
      <div
        className="bg w-screen h-[60vh]  flex flex-col items-center justify-center
      bg-[linear-gradient(rgba(0,0,0,0.01),rgb(0,0,0,0.01)),url('./assets/image37.png')] bg-cover bg-no-repeat bg-top text-white"
      >
        <h1 className=" font-bold text-5xl">Single Product</h1>
        <div className=" flex items-center justify-around w-[20vw] text-xl ">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart Page</Link>
        </div>
      </div>

      <div className=" flex items-center justify-around  md:w-[90vw] w-screen md:h-[120vh] h-[90vh] md:flex-row flex-wrap  ">
        <div className=" md:flex-col flex-wrap flex items-center justify-around md:h-[90vh] h-[30vw]  ">
          <img src={Ig} alt="" className=" w-[35vw] " />
          <div className=" flex  items-center justify-around w-[30vw]">
            <button>
              <img
                src={Ig}
                alt=""
                className=" w-[12vw] border-[1px] border-black"
              />
            </button>

            <button>
              <img src={Pl} alt="" className=" w-[12vw]" />
            </button>
          </div>
        </div>

        <div className=" flex items-start justify-around  md:flex-col flex-wrap md:w-[45vw] w-screen md:h-[90vh] h-[90vw] p-[2rem] ">
          <h1 className=" text-5xl">Apple</h1>
          <div className=" flex justify-around">
            <h3 className=" text-2xl">$4.00</h3>
            <img src={Mg} alt="" />
          </div>
          <h5 className=" border-b-[1px]  border-black font-bold sm:flex">
            Apples are a great source of fiber, vitamins, and antioxidants,
            making them a healthy snack for the whole family.
          </h5>

          <h4 className="font-bold text-xl">Type: Apple</h4>
          <h4 className="font-bold text-xl">Weight:1kg</h4>

          {/* <div className="  flex  items-center  justify-around ">
            <h2 className=" px-[10px] bg-slate-300 text-xl">1</h2>
            <div className=" flex flex-col">
              <button className="m-2 px-[10px] bg-slate-300 text-xl">-</button>
              <button className="m-2 px-[10px] bg-slate-300 text-xl ">+</button>
            </div>
          </div> */}

          <div className="flex items-center justify-center">
            <div className="">
              <div className="  flex  items-center  justify-around    ">
                <span className=" px-[10px] bg-slate-300 text-xl">
                  {quantity}
                </span>
                <div className=" flex flex-col">
                  <button
                    onClick={handleDecrement}
                    className="m-2 px-[10px] bg-slate-300 text-xl"
                  >
                    -
                  </button>
                  <button
                    onClick={handleIncrement}
                    className="m-2 px-[10px] bg-slate-300 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 bg-green-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className=" border-t-2 w-[42vw] flex justify-around items-center  ">
            <h3 className=" text-xl font-bold">share</h3>
            <div className=" flex justify-around items-center  w-[8vw]  ">
              <img className="w-[1vw]" src={So} alt="" />
              <img className="w-[1vw]" src={Ci} alt="" />
              <img className="w-[1vw]" src={Al} alt="" />
            </div>

            <Link
              to="/cart"
              className="mt-4 bg-green-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Your Cart
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-[80vw] h-[40vw] flex flex-col items-start justify-around  font-bold">
        <h1>Add Your Contact</h1>
        <div className=" w-[70vw] flex items-center justify-between">
          <div className=" flex flex-col items-start">
            <label htmlFor=""> Name</label>
            <input
              type="text"
              className="px-20 py-2 border-[1px] border-black"
            />
          </div>
          <div className=" flex flex-col items-start">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="px-20 py-2 border-[1px] border-black"
            />
          </div>
        </div>

        <div className=" flex flex-col items-start ">
          <label htmlFor="">Message</label>
          <textarea
            name="Message"
            id="text"
            className="p-2 w-[40vw] h-[30vh] border-[1px] border-black resize-none "
          ></textarea>
        </div>
        <Link
          to="rosemaryoguezuonu@gmail.com"
          className="mt-4 bg-green-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
         send
        </Link>
      </div>
    </div>
  );
};

export default Product;
