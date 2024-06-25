import React from "react";
import "./header.css";
import Img from "../assets/logo copy.png";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <div className="homenav">
      <div className="logo">
        <img src={Img} alt="" />
      </div>
      <nav>
        <a href="">Home</a>
        <a href="#service">Service</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="#testimonial">Testimonials</a>
      </nav>
      <div id="dropdown-menu" className="dropdown-menu">
        <a href="#hero">Home</a>
        <a href="#feature">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#faqs">FAQ</a>
        <a href="#contact">Contact Us</a>
      </div>
      <i className="bi bi-list menu-icon" ></i>

      <div className="user-div">
        <a href="" className="icon-cart">
          <img src="" alt="" />
          <span>0</span>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="">
          <img src="" alt="" />
        </a>
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