// import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./component/home.css";
import Img from "./assets/ok9.png";
import Farm from "./assets/ok4.png";
import Far from "./assets/ok7.png";
import Fa from "./assets/ok3.png";
import F from "./assets/0k6.png";
import In from "./assets/ok8.png";
import Person from "./assets/Frame 12152.png";
import Person2 from "./assets/Frame 12153.png";
import Per2 from "./assets/Ellipse 4 (1).png";
import Per3 from "./assets/Ellipse 4 (2).png";
import Per from "./assets/Ellipse 4.png";
import Img32 from "./assets/image 32.png";
import Img33 from "./assets/image 33.png";
import Img34 from "./assets/Frame 12389.png";
import Logo from "./assets/logo new.png";
import Icon from "./assets/instagram.png";
import Icon2 from "./assets/Component 1.png";
import Icon3 from "./assets/twitter.png";





export const Home = () => {
  useEffect(() => {
    Aos.init(
      {duration:600,
      delay:200}
    );
  },[]);



  return (
    <div className=" b flex items-center justify-center flex-col">
      {/* Home................ */}
      <main
      id="home"
        data-aos="fade-right"
        className=" w-screen md:h-[70vh] h-[50vh]flex items-center justify-center 
       "
      >
        <div
          className=" bg w-screen md:h-[70vh] h-[85vh] flex flex-col items-center justify-center
      bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgb(0,0,0,0.5)),url(./assets/nice7.jpeg)] bg-cover bg-no-repeat bg-center   text-white"
        >
          <div className=" flex flex-col items-center justify-around  md:w-[70vw] w-[90vw] md:h-[50vh] h-[70vh] ">
            <div className=" flex flex-col items-center justify-around md:h-[30vh] h-[60vh] md:w-[70vw] w-[90vw]  ">
              <h1 className=" md:text-6xl text-6xl font-bold  md:text-center text-center">
                WELCOME TO AGROBIA
              </h1>
              <p className="md:text-xl text-xl text-center ">
                Step into the future of agriculture with agrobia, where
                innovation meets sustainability. optimize your farming with
                precision tools, real-time data, and advanced analytics for a
                smarter, greener, and more profitable harvest.
              </p>
            </div>
            <div className=" flex justify-between items-center md:w-[30vw] w-[90vw] md:h-[10vh] h-[7vh]  ">
              <button className=" btn md:w-[14vw] w-[40vw] md:h-[6vh] h-[6vh] bg-[#b95e31] flex items-center justify-center">
                Explore Our Market
              </button>
              <button className=" btn md:w-[14vw] w-[40vw] md:h-[6vh] h-[6vh] border-2 border-[#fff]  flex items-center justify-center">
                Become a seller
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className=" bg w-screen h-[70vh]  flex flex-col items-center justify-center
      bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgb(0,0,0,0.5)),url(./assets/agro.jpeg)] bg-cover bg-no-repeat bg-center   text-white"
        >
          <div className=" flex flex-col items-center justify-around  md:w-[70vw] w-[80vw] md:h-[50vh] ">
            <div className=" flex flex-col items-center justify-around h-[30vh]">
              <h1 className=" md:text-6xl text-4xl font-bold">
                WELCOME TO AGROBIA
              </h1>
              <p className=" text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Animi officiis exercitationem reiciendis <br />
                tenetur voluptatum tempore fugit veniam velit.
              </p>
            </div>
            <div className=" flex justify-between items-center md:w-[30vw] w-[40vw] md:h-[10vh] h-[7vh] ">
              <button className=" btn md:w-[14vw] w-[40vw] md:h-[6vh] h-[6vh] bg-[#b95e31] flex items-center justify-center">
                Explore Our Market
              </button>
              <button className=" btn md:w-[14vw] w-[40vw] md:h-[6vh] h-[6vh] border-2 border-[#fff]  flex items-center justify-center">
                Become a seller
              </button>
            </div>
          </div>
        </div> */}
      </main>
      <main
      id="services"
        data-aos="zoom-in"
        className="flex flex-col items-center justify-around md:h-[90vh] h-[140vh] w-screen "
      >
        <div>
          <h1 className=" md:text-6xl text-5xl font-bold  ">Our Services</h1>
        </div>
        <div className="md:w-[80vw] w-[80vw] md:h-[50vh] h-[120vh] flex items-center justify-around md:flex-row flex-col ">
          <aside className="md:w-[20vw] w-[80vw] md:h-[50vh] h-[35vh] rounded-2xl flex flex-col items-start md:justify-center justify-start  shadow-md shadow-black ">
            <img
              src={Farm}
              alt="pic"
              className="md:w-[20vw] w-[80vw] md:h-[30vh] h-[18vh] rounded-t-2xl"
            />
            <p className="md:h-[20vw] h-[10vh] md:w-[20vw] w-[80vw] md:px-3 px-3 font-medium">
              <span className="text-xl font-bold">Direct Market Access:</span>{" "}
              <br />
              Giving you direct access to farm produce.
            </p>
          </aside>
          <aside className="md:w-[20vw] w-[80vw] md:h-[50vh] h-[35vh] rounded-2xl flex flex-col items-start md:justify-center justify-start  shadow-md shadow-black ">
            <img
              src={Img}
              alt="pic"
              className="md:w-[20vw] w-[80vw] md:h-[30vh] h-[18vh] rounded-t-2xl"
            />
            <p className="md:h-[20vw] h-[10vh] md:w-[20vw] w-[80vw] md:px-3 px-3 font-medium">
              <span className=" font-bold text-xl ">
                Invetory and Order Management:
              </span>{" "}
              Provide tools for sellers to Manage inventory and track orders
              efficiently.
            </p>
          </aside>
          <aside className="md:w-[20vw] w-[80vw] md:h-[50vh] h-[35vh] rounded-2xl flex flex-col items-start md:justify-center justify-start   shadow-md shadow-black ">
            <img
              src={Farm}
              alt="pic"
              className="md:w-[20vw] w-[80vw] md:h-[30vh] h-[18vh] rounded-t-2xl"
            />
            <p className="md:h-[20vw] h-[10vh] md:w-[20vw] w-[80vw] md:px-3 px-3 font-medium">
              <span className="text-xl font-bold">Logistics and Shopping:</span>{" "}
              <br />
              Reliable and efficient delivery of products and ensuring it meets
              your .
            </p>
          </aside>
        </div>
      </main>

      <main
        data-aos="zoom-out"
        className="flex flex-col items-center justify-around md:h-[100vh] h-[140vh] w-screen "
      >
        <div>
          <h1 className=" md:text-6xl text-5xl font-bold ">Latest Products</h1>
        </div>
        <div className="md:w-screen w-screen  md:h-[90vh] h-[130vh] flex items-center justify-center md:flex-row flex-col   bg-[#007200]">
          <section className="flex items-center justify-around md:flex-row flex-col  md:w-[80vw] md:h-[70vh] h-[120vh] ">
            <aside className="md:w-[35vw] w-[80vw] md:h-[65vh] h-[50vh]  flex flex-col items-center justify-center ">
              <div>
                <img
                  src={Fa}
                  alt="pic"
                  className="md:w-[20vw] w-[80vw] md:h-[40vh] h-[30vh] "
                />
              </div>

              <div className="md:w-[20vw] w-[80vw] md:h-[10vh]  flex items-center justify-center bg-white ">
                <p className="   font-semibold p-3">
                  Fresh vegetables at your disposal at reduced rates
                </p>
              </div>
            </aside>
            <aside className="md:w-[35vw] w-[80vw] md:h-[60vh] h-[35vh]  flex flex-col items-center justify-center ">
              <div>
                <img
                  src={Far}
                  alt="pic"
                  className="md:w-[20vw] w-[80vw] md:h-[40vh] h-[30vh] "
                />
              </div>

              <div className="md:w-[20vw] w-[80vw] md:h-[10vh]  flex items-center justify-center bg-white border-2">
                <p className="  p-3 font-semibold">
                  Affordable diary products and poultry products{" "}
                </p>
              </div>
            </aside>
            <aside className="md:w-[35vw] w-[80vw] md:h-[60vh] h-[40vh]  flex flex-col items-center justify-center ">
              <div>
                <img
                  src={F}
                  alt="pic"
                  className="md:w-[20vw] w-[80vw] md:h-[40vh] h-[30vh] "
                />
              </div>

              <div className="md:w-[20vw] w-[80vw] md:h-[10vh]  flex items-center justify-center bg-white ">
                <p className="   font-semibold text-black p-3">
                  Grains and legumes at affordable prices
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <main
        data-aos="fade-up"
        className="flex  items-center justify-center md:h-[100vh] h-[160vh] w-screen  "
      >
        <div className="flex md:items-end items-center  md:justify-between justify-around  md:w-[75vw] w-[90vw]   md:flex-row flex-col ">
          <section className="md:w-[35vw] w-[90vw]   md:h-[90vh] h-[60vh]">
            <img
              src={In}
              alt=""
              className="md:w-[35vw] w-[90vw] md:h-[90vh] h-[60vh]"
            />
          </section>
          <section className="md:w-[35vw] w-[90vw]  md:h-[75vh] h-[90vh]  flex flex-col md:items-start  items-center md:justify-around justify-between   ">
            <div className=" md:w-[30vw] w-[70vw] md:text-justify text-center ">
              <h1 className="font-bold text-3xl ">Fast and Free Delivery</h1>
              <p className="md:font-medium font-semibold    ">
                {" "}
                Our efficient logistics network ensures fast and free delivery
                of products within 48hrs
              </p>
            </div>
            <div className=" md:w-[30vw] w-[70vw] md:text-justify text-center  ">
              <h1 className="font-bold text-3xl">Freshness guaranteed</h1>
              <p className="md:font-medium font-semibold      ">
                We guarantee the freshness and quality of our products, ensuring
                they reach you in the best condition
              </p>
            </div>
            <div className=" md:w-[30vw] w-[70vw] md:text-justify text-center  ">
              <h1 className="font-bold text-3xl">Wide Selection</h1>
              <p className="md:font-medium font-semibold      ">
                Our platform offers a diverse range of products, catering to
                various needs and preferences
              </p>
            </div>
            <div className=" but border-2  border-[#007200] md:w-[30vw] w-[75vw] md:h-[5vh] h-[6vh] text-center rounded-full flex items-center justify-center">
              <button className="md:font-medium font-semibold  ">
                Connect with our marketers
              </button>
            </div>
          </section>
        </div>
      </main>

      <main
        data-aos="zoom-in"
        className="flex  items-center justify-center md:h-[100vh] h-[140vh] w-screen  border-2  "
      ></main>

      <main
        data-aos="fade-down"
        className="flex flex-col  items-center justify-around md:h-[90vh] h-[140vh] w-screen    bg-slate-200 md:font-normal font-semibold "
      >
        <div>
          <h1
            className=" md:text-6xl text-5xl font-bold md:w-[] w-[80vw] text-center 
          "
          >
            What People Say
          </h1>
        </div>
        <div className=" flex items-center  md:h-[] h-[120vh] md:justify-between justify-around  md:w-[80vw] w-[85vw] md:flex-row flex-col">
          <aside className="flex items-center justify-center md:h-[40vh] h-[55vh] md:w-[35vw] w-[85vw] bg-white md:flex-row flex-col ">
            <img
              src={Person}
              alt=""
              className="md:w-[18vw] w-[85vw] md:h-[40vh] h-[30vh]"
            />
            <p className=" flex flex-col items-start justify-between p-2  md:h-[32vh] h-[35vh] md:text-start text-center  md:font-medium font-semibold ">
              <h5>
                “I’ve tried several online grocery platforms, but this one
                offers the freshest and highest-quality products. I’m hooked
              </h5>
              <h4>David k., New york</h4>
            </p>
          </aside>

          <aside className="flex items-center justify-center md:h-[40vh] h-[55vh] md:w-[35vw] w-[85vw] bg-white md:flex-row flex-col ">
            <img
              src={Person2}
              alt=""
              className="md:w-[18vw] w-[85vw] md:h-[40vh] h-[30vh]"
            />
            <p className=" flex flex-col items-start justify-between p-2  md:h-[32vh] h-[35vh] md:text-start text-center md:font-medium font-semibold   ">
              <h5>
                “ I bought fresh organic produce from this platform and was
                impressed by the quality and taste! The delivery was fast and
                convenient”.
              </h5>
              <h4>Emily W.,SanFrancisco</h4>
            </p>
          </aside>
        </div>
      </main>

      <main
      id="blog"
        data-aos="zoom-out"
        className="flex flex-col  items-center justify-around md:h-[100vh] h-[150vh] w-screen "
      >
        <div className=" md:text-6xl text-5xl font-bold ">Our Blog</div>

        <div
          className=" 
         md:w-[85vw] md:h-[60vh] h-[140vh] flex items-center justify-around md:flex-row flex-col md:font-normal font-semibold "
        >
          <aside
            className="
           md:w-[25vw] md:h-[60vh] flex flex-col items-center "
          >
            <div
              className=" md:h-[8vh] md:w-[25vw] w-[70vw] flex items-center justify-between  
           "
            >
              <div
                className="md:h-[7vh] 
               md:w-[12vw] w-[35vw] flex items-center justify-around md:font-medium font-semibold "
              >
                <img src={Per} alt="" />
                <span className=" "> By Benson</span>
              </div>
              <div className="md:w-[8vw]">April 20 2024</div>
            </div>

            <div
              className="flex flex-col items-center justify-around md:w-[25vw] md:h-[48vh] 
              "
            >
              <div>
                <img src={Img32} alt="" />
              </div>
              <p
                className=" md:w-[20vw] md:h-[8vh] text-center 
              "
              >
                <span className=" font-medium">Product spotlight:</span> <br />
                fresh tomatoes from Agrobia
              </p>
            </div>
          </aside>
          <aside
            className="
           md:w-[25vw] md:h-[60vh] flex flex-col items-center "
          >
            <div
              className=" md:h-[8vh] flex items-center justify-between md:w-[25vw]  w-[70vw]  md:font-medium font-semibold  
            "
            >
              <div
                className="md:h-[7vh] 
               md:w-[12vw] w-[35vw] flex items-center justify-around"
              >
                <img src={Per2} alt="" />
                <span className=" "> By Favour</span>
              </div>
              <div className="md:w-[8vw]">April 23 2024</div>
            </div>

            <div
              className="flex flex-col items-center justify-around md:w-[25vw] md:h-[48vh] 
              "
            >
              <div>
                <img src={Img33} alt="" />
              </div>
              <p
                className=" md:w-[20vw] md:h-[8vh] text-center 
              "
              >
                <span className=" md:font-medium font-semibold ">
                  {" "}
                  From our Farm to Your Table:
                </span>{" "}
                <br />
                Agrobia’s farm to table philosophy
              </p>
            </div>
          </aside>
          <aside
            className="
           md:w-[25vw] md:h-[60vh]  flex flex-col items-center"
          >
            <div
              className=" md:h-[8vh] flex items-center justify-between md:w-[25vw]  w-[70vw]  
            "
            >
              <div
                className="md:h-[7vh] 
               md:w-[12vw] w-[35vw] flex items-center justify-around md:font-medium font-semibold "
              >
                <img src={Per3} alt="" />
                <span className=" "> By Erick</span>
              </div>
              <div className=" md:w-[8vw]">April 27 2024</div>
            </div>

            <div className="flex flex-col items-center justify-around md:w-[25vw] md:h-[48vh] md:font-medium font-semibold   ">
              <div>
                <img src={Img34} alt="" />
              </div>
              <p className=" md:w-[20vw] md:h-[8vh] text-center ">
                <span className=" font-medium">
                  {" "}
                  From our Farm to Your Table:
                </span>{" "}
                <br />
                Agrobia’s farm to table slogan
              </p>
            </div>
          </aside>
        </div>
      </main>

      <main
        data-aos="zoom-in"
        className="flex   items-center justify-around md:h-[80vh] h-[110vh] w-screen  bg-[#007200]  "
      >
        <section className="flex flex-col  items-start justify-around md:h-[70vh] h-[100vh] md:w-[90vw] w-[90vw] ">
          <div>
            <img src={Logo} alt="" className=" md:w-[5vw] w-[20vw]" />
          </div>

          <div className="md:w-[90vw] w-[90vw] md:h-[50vh] h-[80vh]  flex items-center justify-center  ">
            <section className=" md:w-[80vw] w-[90vw] md:h-[50vh] h-[80vh] flex items-center justify-between   md:flex-row flex-col text-white md:text-xl text-2xl">
              <div className=" flex items-center justify-around md:w-[30vw] w-[90vw] md:h-[50vh] h-[30vh]  ">
                <div className=" flex flex-col md:items-start items-start  justify-around ">
                  <h1 className="font-bold md:text-2xl text-xl">
                    WHY AGROBIA?
                  </h1>
                  <li className=" flex flex-col md:items-start justify-around md:h-[30vh] md:font-medium font-semibold  md:text-xl text-xs ">
                    <div to="">Email Us </div>
                    <div to="">Channels</div>
                    <div to="">Engagements</div>
                    <div to="">Scale</div>
                    <div to=""> Watch demo</div>
                  </li>
                </div>
                <div className=" flex flex-col md:items-start items-end   justify-around">
                  <h1 className="md:text-2xl text-xl font-bold">PRODUCT</h1>
                  <li className=" flex flex-col md:items-start items-end justify-around md:h-[30vh] md:font-medium font-semibold  md:text-xl text-xs ">
                    <div to="">Features</div>
                    <div to="">Intergrations</div>
                    <div to="">Enterprise</div>
                    <div to="">Solutions</div>
                  </li>
                </div>
              </div>

              <div className=" flex md:items-start items-center justify-around md:w-[10vw] w-[90vw] md:h-[25vh] h-[25vh]  md:flex-col flex-row ">
                <h1 className="md:text-2xl text-xl font-bold">PRICING</h1>
                <li className=" flex flex-col items-start justify-around md:font-medium font-semibold  md:text-xl text-xs  ">
                  <div to=""> Substriptions </div>
                  <div to="">Paid vs free</div>
                </li>
              </div>
              <div className=" flex items-center justify-around md:w-[30vw] w-[90vw] md:h-[50vh] h-[30vh] ">
                <div className=" flex flex-col items-start  justify-around">
                  <h1 className="md:text-2xl text-xl font-bold"> RESOURCES</h1>
                  <li className=" flex flex-col items-start justify-around md:h-[30vh] md:font-medium font-semibold  md:text-xl text-xs">
                    <div to="">Partners </div>
                    <div to=""> Developers</div>
                    <div to="">Community</div>
                    <div to="">Apps</div>
                    <div to="">Blog</div>
                  </li>
                </div>
                <div className=" flex flex-col md:items-start items-end  justify-around">
                  <h1 className="md:text-2xl text-xl font-bold">COMPANY</h1>
                  <li className=" flex flex-col md:items-start items-end justify-around md:h-[30vh] md:font-medium font-semibold md:text-xl text-xs ">
                    <div to="">About Us </div>
                    <div to="">News</div>
                    <div to="">Media kit </div>
                    <div to="">Careers</div>
                    <div to="">Agrobia shop</div>
                  </li>
                </div>
              </div>
            </section>
          </div>
          <div className="flex items-center justify-around md:w-[10vw] w-[40vw]">
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            <img src={Icon} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
