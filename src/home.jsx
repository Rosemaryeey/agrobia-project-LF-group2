// import React from "react";
// import React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./component/home.css";
import Product from "./product.jsx";
import EmblaCarousel from "./component/EmblaCarousel.jsx";
import service2 from "./assets/service2.png";
import service1 from "./assets/service1.png";
import service3 from "./assets/service3.png";
import Far from "./assets/ok7.png";
import Fa from "./assets/ok3.png";
import F from "./assets/0k6.png";
import aboutimg from "./assets/image 22.png";
import product1 from "./assets/nice.jpeg";
import product2 from "./assets/nice2.jpeg";
import product3 from "./assets/nice3.jpeg";
import product4 from "./assets/nice4.jpeg";
import product5 from "./assets/nice5.jpeg";
import product6 from "./assets/nice6.jpeg";
import testimonial1 from "./assets/testimonial1.png";
import testimonial2 from "./assets/testimonial2.png";
import profilepic from "./assets/buy-1.jpg";
import blogimg1 from "./assets/image 31.png";
import blogimg2 from "./assets/image 32.png";
import blogimg3 from "./assets/image 33.png";
import "./app.js";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = [
  {
    url: "./assets/agro.jpeg",
  },
  {
    url: "./assets/bg.jpeg",
  },
  {
    url: "./assets/agro2.jpeg",
  },
];
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Home = () => {
  return (
    <div>
      <div className="banner-div">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <div>
          <h3>Welcome To Agrobia</h3>
        </div>
        <p>
          Step into the future of agriculture with Agrobia, where innovation
          meets sustainability. Optimize your farming with precision tools, real
          time data, and analytics for a smarter, greener, and more profitable
          harvest.
        </p>
        <div className="btn-div">
          <a href="#">
            <span></span>
            Explore Our Market
          </a>

          <a href="#">
            <span></span>
            Become a Seller
          </a>
        </div>
      </div>

      {/* services section */}
      <section id="service">
        <div className="title">
          <h3>Our Services</h3>
        </div>
        <div id="services">
          <div className="service-div">
            <img src={service1} alt="" />
            <p>
              <b>Direct marketplace access:</b>
              <br />
              Connect buyers directly with farm producers
            </p>
          </div>
          <div className="service-div">
            <img src={service2} alt="" />
            <p>
              <b>Inventory and Order Management:</b>
              <br />
              Provide tools for sellers to manage inventory and track orders
              efficiently.
            </p>
          </div>
          <div className="service-div">
            <img src={service3} alt="" />
            <p>
              <b>Logistics and shipping:</b>
              <br />
              Reliable and efficient delivery of products and ensuring it meets
              your business goals.
            </p>
          </div>
        </div>
      </section>
      {/* categories section */}
      <section id="category">
        <div className="title">
          <h3>Categories</h3>
        </div>
        <div className="categories    ">
          <div className="categories-div">
            <img src={Fa} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              labore modi nihil nam sit rerum mollitia perferendis nobis
              laudantium voluptatem.
            </p>
          </div>
          <div className="categories-div">
            <img src={Far} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              labore modi nihil nam sit rerum mollitia perferendis nobis
              laudantium voluptatem.
            </p>
          </div>

          <div className="categories-div">
            <img src={F} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              labore modi nihil nam sit rerum mollitia perferendis nobis
              laudantium voluptatem.
            </p>
          </div>
          <div className="categories-div">
            <img src={F} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              labore modi nihil nam sit rerum mollitia perferendis nobis
              laudantium voluptatem.
            </p>
          </div>
          <div className="categories-div">
            <img src={F} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              labore modi nihil nam sit rerum mollitia perferendis nobis
              laudantium voluptatem.
            </p>
          </div>
        </div>
      </section>
      {/* about section */}
      <section id="about">
        <img src={aboutimg} alt="" />
        <div className="about">
          <div className="about-text">
            <h3>Fast and Quick Delivery</h3>
            <p>
              Our efficient logistics network ensures fast and free delivery of
              products within 48hrs
            </p>
          </div>
          <div className="about-text">
            <h3>Freshness Guaranteed</h3>
            <p>
              We guarantee the freshness and quality of our products, ensuring
              they reach you in the best condition
            </p>
          </div>
          <div className="about-text">
            <h3>Wide Selection</h3>
            <p>
              Our platform offers a diverse range of products, catering to
              various needs and preferences
            </p>
          </div>
        </div>
      </section>
      {/* products section */}
      <section id="products">
        <div className="title">
          <h3>Products</h3>
        </div>
        <div className="products">
          <div className="product-div">
            <img src={product1} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            <a href={Product}>
              <button>View Product</button>
            </a>
          </div>
          <div className="product-div">
            <img src={product2} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            <a href={Product}>
              <button>View Product</button>
            </a>
          </div>
          <div className="product-div">
            <img src={product3} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            <a href={Product}>
              <button>View Product</button>
            </a>
          </div>
          <div className="product-div">
            <img src={product4} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            <a href={Product}>
              <button>View Product</button>
            </a>
          </div>
          <div className="product-div">
            <img src={product5} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            <a href="product.jsx">
              <button>View Product</button>
            </a>
          </div>
          <div className="product-div">
            <img src={product6} alt="" />

            <small>Apple</small>
            <br />
            <small>#900.00</small>
            <br />

            {/* <Link to="">
              <button>View Product</button>
            </Link> */}
          </div>
        </div>

        <a href="./product">
          <div className="more-btn">View more &nbsp; &#8594;</div>
        </a>
      </section>
      {/* testimonial section */}
      <section id="testimonial">
        <div className="title">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <div className="testimonial-div">
            <img src={testimonial1} alt="" />
            <div className="testimonials">
              <p>
                "I have tried several online grocery platforms, but this one
                offers the freshest and highest-quality products. I'm hooked."
              </p>
              <small>David k, Port Harcourt</small>
            </div>
          </div>
          <div className="testimonial-div">
            <img src={testimonial2} alt="" />
            <div className="testimonials">
              <p>
                "I bought fresh organic produce from this platform and was
                impressed by the quality and taste! The delivery was fast and
                convenient."
              </p>
              <small>Rosemary Oguezuonu, Aba</small>
            </div>
          </div>
        </div>
        <a href="">
          <div className="more-btn">Learn More</div>
        </a>
      </section>
      {/* blog section */}
      <section id="blog" className="flex items-center justify-center flex-col">
        <div className="title">
          <h3>Our Blog</h3>
        </div>
        <div className="blog">
          <div className="blog-div">
            <div className="user-info">
              <img src={profilepic} alt="" />
              <small>Blessing favour</small>
              <small>April 20, 2024</small>
            </div>
            <br />
            <img src={blogimg1} alt="" />
            <p>Product Spotlight: Fresh tomatoes from agrobia</p>
          </div>
          <div className="blog-div">
            <div className="user-info">
              <img src={profilepic} alt="" />
              <small>Blessing favour</small>
              <small>April 20, 2024</small>
            </div>
            <br />
            <img src={blogimg2} alt="" />
            <p>
              From our farm to your table: Agrobia's farm to table philosophy
            </p>
          </div>
          <div className="blog-div">
            <div className="user-info">
              <img src={profilepic} alt="" />
              <small>Blessing favour</small>
              <small>April 20, 2024</small>
            </div>
            <br />
            <img src={blogimg3} alt="" />
            <p>From our farm to your table: Agrobia's farm to table slogan</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
