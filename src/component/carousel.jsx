// src/components/Carousel.jsx
import React, { useState } from "react";
import Far from "../assets/ok7.png";
import Fa from "../assets/ok3.png";
import F from "../assets/0k6.png";
import Oh from "../assets/banner2.png";
import Oh2 from "../assets/image 32 copy.png";
import Oh3 from "../assets/image 60.png";
import Oh4 from "../assets/nice.jpeg";
import Oh5 from "../assets/nice2.jpeg";

import Oh6 from "../assets/nice3.jpeg";
import Oh7 from "../assets/nice6.jpeg";
import Oh8 from "../assets/nice7.jpeg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: Far,
      description:
        "We provide the best from the poutry",
    },
    {
      image: Oh,
      description:
        "You can find your favourite fruit because it's out of season ?",
    },
    {
      image: Fa,
      description: "Are you looking for fresh Groceries?",
    },

    {
      image: Oh7,
      description: " Poutry Products ",
    },

    {
      image: F,
      description: "Are grains scarce",
    },
    {
      image: Oh8,
      description: "Fruits of all kind",
    },
    {
      image: Oh6,
      description: " fishes ",
    },

    {
      image: F,
      description: " Are grains expensive",
    },
    {
      image: Oh2,
      description: "What are some daily habits of successful people",
    },

    {
      image: Oh7,
      description: "What are some daily habits of successful people",
    },
    {
      image: Oh2,
      description: "What are some daily habits of successful people",
    },
    {
      image: Oh3,
      description: "What are some daily habits of successful people",
    },
    {
      image: Oh5,
      description: "What are some daily habits of successful people",
    },
    {
      image: Oh8,
      description: "Friuts ooooo",
    },
    {
      image: Oh4,
      description: "  Are you looking for big sized tubes",
    },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-[50vw] p-4">
              <img
                src={item.image}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover"
              />
              <div className="mt-4">
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
