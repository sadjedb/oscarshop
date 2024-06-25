"use client";
import React, { useState } from "react";
import heroimage1 from "../../assets/Home/Hero/heroimage1.jpg";
import heroimage2 from "../../assets/Home/Hero/heroimage2.jpg";
import heroimage3 from "../../assets/Home/Hero/heroimage3.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  const images = [
    { image: heroimage1 },
    { image: heroimage2 },
    { image: heroimage3 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[750px] py-4 md:py-8">
      <div
        className="flex w-full h-full items-center relative overflow-hidden"
        style={{ userSelect: "none" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image.src}
            alt="Hero"
            className={`absolute w-full h-full object-cover transition-all duration-700 ease-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-100"
            }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
        <div className="absolute flex justify-between w-full px-4 sm:px-5 text-lg sm:text-2xl text-white z-10">
          <MdArrowBackIos
            className="cursor-pointer"
            onClick={handlePrevImage}
          />
          <MdArrowForwardIos
            className="cursor-pointer"
            onClick={handleNextImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
