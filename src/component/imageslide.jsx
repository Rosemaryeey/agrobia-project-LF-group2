// import React from "react";
// import "react-slideshow-image/dist/style.css";
// import { Fade, Zoom, Slide } from "react-slideshow-image";

// const slideimages = [
//   {
//     url: "./assets/agro.jpeg",
    
//   },
//   {
//     url: "./assets/bg.jpeg",
//   },
//   {
//     url: "./assets/agro2.jpeg",
//   },
// ];

// const divstyle ={
//   display:"flex",
//   alignitems:"center",
//   height:"70vh",
//   backgroundsize:"cover",
// }

// function Imageslide() {
//   return <div>
// <Slide>
//   {slideimages.map((image, index) =>(
//     <div key={index}>
//       <div style ={{...divstyle, backgroundImage:`url(${image.url})`}}>

//       </div>
//     </div>
//   ))}
// </Slide>

//   </div>;
// }

// export default Imageslide;


import ReactDOM from "react-dom/client";
import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);