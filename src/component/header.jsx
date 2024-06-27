import React from "react";
import "./header.css";
import Img from "../assets/logo copy.png";
import { MdMenu, MdPerson, MdShoppingCart } from "react-icons/md";
import {Link } from "react-router-dom";

function Header() {

  return (
    <div className="homenav">
      <div className="logo">
        <img src={Img} alt="" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <a href="#service">Service</a>
        <Link to="/shop">Shop</Link>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#testimonial">Testimonials</a>
      </nav>
      <div id="dropdown-menu" className="dropdown-menu">
        <a href="#hero">Home</a>
        <a href="#feature">Features</a>
        <a href="#pricing">Pricing</a>
        <Link to="/shop">Shop</Link>
        <a href="#testimonial">Testimonials</a>
        <a href="#faqs">FAQ</a>
        <a href="#contact">Contact Us</a>
      </div>
      <i className="bi bi-list menu-icon"></i>

      <div className="user-div">
        <Link to="/cart" className="icon-cart relative ">
          {/* <img src="" alt="" /> */}
          <MdShoppingCart className=" text-3xl " />
          <span className=" absolute  w-5 h-5 bottom-0 left-5  bg-[#007200] rounded-full flex items-center justify-center text-white">
            0
          </span>
        </Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="" className="text-2xl cursor-pointer">
          <MdPerson />
        </Link>
        <a href="">
          <span>logout</span>
        </a>
      </div>

      {/* <div class="register-btn">
        <a href="">
            <span>
                Login
            </span>
        </a>
        <a href="">
            <span>
                Sign Up
            </span>
        </a>

    </div> */}
    </div>
  );
}
export default Header;