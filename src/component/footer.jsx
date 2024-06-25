import React from "react";
import "./footer.css";
import Img from "../assets/logo copy.png";



export const  Footer = () => {
    return (
      <footer>
        <div class="footer-div">
          <nav>
            <h3>Why Agrobia?</h3>
            <a href="mailto:chibuzor.john.2018@gmail.com">Email Us</a>
            <a href="">Channels</a>
            <a href="">Engagements</a>
            <a href="">Scale</a>
            <a href="">Watch demo</a>
          </nav>
          <nav>
            <h3>Product</h3>
            <a href="">Features</a>
            <a href="">Integrations</a>
            <a href="">Enterprise</a>
            <a href="">Solutions</a>
          </nav>
          <nav>
            <h3>Pricing</h3>
            <a href="">Subscription</a>
            <a href="">Paid vs Free</a>
          </nav>
          <nav>
            <h3>Resources</h3>
            <a href="">Partners</a>
            <a href="">Developers</a>
            <a href="">Community</a>
            <a href="">Apps</a>
            <a href="">Blog</a>
          </nav>
          <nav>
            <h3>Company</h3>
            <a href="">About Us</a>
            <a href="">News</a>
            <a href="">Media kit</a>
            <a href="">Careers</a>
            <a href="">Agrobia Shop</a>
          </nav>
        </div>
        <div class="socials">
          <a href="">f</a>
          <a href="">x</a>
          <a href="">in</a>
        </div>
      </footer>
    );
} 
export default Footer;