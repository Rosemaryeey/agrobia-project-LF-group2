import React from "react";
import "./header.css";
import Img from "../assets/logo new.png";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className=" b w-screen h-[12vh] flex items-center justify-center ">
      <div className=" flex   items-center justify-between md:w-[90vw] w-[90vw] h-[10vh]  ">
        <div className=" md:w-[10vw] w-[30vw] md:h-[12vh]  flex items-center justify-center ">
          <img
            className="md:w-[10vw] w-[30vw] md:h-[14vh] h-[12vh]  "
            src={Img}
            alt="logo"
          />
        </div>
        <div className=" md:hidden flex  justify-center items-center text-4xl ">
          <MdMenu />
        </div>
        {/* <div className=" w-[40vw] md:flex hidden items-center justify-around">
          <Link to="#home" className="a  text-slate-700">
            Home
          </Link>
          <Link to="#about" className="a  text-slate-700">
            About
          </Link>
          <Link to="#services" className="a  text-slate-700">
            Services
          </Link>
          <Link to="#contact" className="a  text-slate-700">
            Contact
          </Link>
          <Link to="#blog" className="a  text-slate-700">
            Blog
          </Link>
        </div> */}
        <div className=" flex justify-between items-center md:w-[20vw] w-[40vw] md:h-[10vh] h-[7vh]  ">
          <button className="btn md:w-[8vw] w-[20vw] md:h-[6vh] h-[6vh] bg-[#b95e31] flex items-center justify-center ">
            Login
          </button>
          <button className="btn md:w-[8vw] w-[20vw] md:h-[6vh] h-[6vh] bg-[#b95e31] flex items-center justify-center">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
