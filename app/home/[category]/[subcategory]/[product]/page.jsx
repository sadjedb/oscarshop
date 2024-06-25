"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaPlus, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Router, useRouter } from "next/router";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Page = () => {
  const [buttonText, setButtonText] = useState("Share");
  const handleCopyPathname = async () => {
    try {
      const fullUrl = window.location.href;
      await navigator.clipboard.writeText(fullUrl);
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Share");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const [selectedImage, setSelectedImage] = useState({
    image1: "https://uptownoire.com/wp-content/uploads/2024/06/img_5575.jpeg",
    image2: "https://uptownoire.com/wp-content/uploads/2024/06/img_5576.jpeg",
    image3: "https://uptownoire.com/wp-content/uploads/2024/06/img_5582.jpeg",
    image4: "https://uptownoire.com/wp-content/uploads/2024/06/img_5579.jpeg",
    image5: "https://uptownoire.com/wp-content/uploads/2024/06/img_5578.jpeg",
    image6: "https://uptownoire.com/wp-content/uploads/2024/06/img_5580.jpeg",
    image7: "https://uptownoire.com/wp-content/uploads/2024/06/img_5575.jpeg",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageKeys = Object.keys(selectedImage);

  const handleClickChangeImage = (e) => {
    const newImage = new Image();
    newImage.src = e.target.src;
    newImage.onload = () => {
      setSelectedImage((prevSelectedImage) => ({
        ...prevSelectedImage,
        image1: newImage.src,
      }));
      setCurrentImageIndex(imageKeys.indexOf(e.target.alt));
    };
  };

  const handleClickArrowNextImage = () => {
    const nextImageIndex = (currentImageIndex + 1) % imageKeys.length;
    setCurrentImageIndex(nextImageIndex);
    setSelectedImage((prevSelectedImage) => ({
      ...prevSelectedImage,
      image1: prevSelectedImage[imageKeys[nextImageIndex]],
    }));
  };

  const handleClickArrowPrevImage = () => {
    const prevImageIndex =
      (currentImageIndex - 1 + imageKeys.length) % imageKeys.length;
    setCurrentImageIndex(prevImageIndex);
    setSelectedImage((prevSelectedImage) => ({
      ...prevSelectedImage,
      image1: prevSelectedImage[imageKeys[prevImageIndex]],
    }));
  };

  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transformOrigin = "center center";
  };
  const [selectValue, setSelectValue] = useState("");
  const handleClickSelectedValue = (e) => {
    setSelectValue(e.target.getAttribute("value"));
    console.log(e.target.getAttribute("value"));
    const siblings = e.target.parentNode.children;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i] !== e.target) {
        siblings[i].style.backgroundColor = "#000";
        siblings[i].style.color = "#fff";
        siblings[i].style.border = "2px solid #000";
        siblings[i].style.cursor = "pointer";
      } else {
        siblings[i].style.backgroundColor = "#fff";
        siblings[i].style.color = "#000";
        siblings[i].style.border = "2px solid #000";
        siblings[i].style.cursor = "default";
      }
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center font-jost">
      <div className="flex w-full md:w-[47%] justify-center py-10 md:py-20 border-r-[1px] border-black">
        <div className="flex flex-col justify-center items-center">
          <div
            className="relative w-[90%] sm:w-[700px] h-[90vw] sm:h-[700px] group overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imgRef}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-150 select-none"
              src={selectedImage.image1}
              alt=""
            />
            <div className="absolute flex justify-between px-5 w-full top-[50%] text-2xl text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MdArrowBackIos
                className="cursor-pointer text-2xl text-black"
                onClick={handleClickArrowPrevImage}
              />
              <MdArrowForwardIos
                className="cursor-pointer text-2xl text-black"
                onClick={handleClickArrowNextImage}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-5 pt-4 flex-wrap">
            {imageKeys.slice(1).map((key, index) => (
              <img
                key={index}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover hover:opacity-75 transition-all duration-700 select-none"
                src={selectedImage[key]}
                alt={key}
                onClick={handleClickChangeImage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-[47%] flex-col py-10 md:py-20 px-5 md:px-14">
        {/* Description div */}
        <div className="flex flex-col w-full pb-6">
          <h1 className="text-xl md:text-2xl font-semibold pb-5">
            PM ELASTIC LOOSE FIT SWEATPANTS IN GREY
          </h1>
          <h2 className="pb-4">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </h2>
          <div className="flex gap-5 md:gap-9 text-base md:text-lg font-semibold">
            <div>
              <p>
                5K+ <span className="text-black opacity-70">Sold</span>
              </p>
            </div>

            <p className="flex justify-center items-center">
              <FaStar className="text-yellow-400" /> 4.0{" "}
              <span className="text-black opacity-70">(225 reviews)</span>
            </p>
          </div>

          <h1 className="text-2xl md:text-3xl flex items-center gap-4 pt-4">
            3 800 DZD
            <span className="line-through text-lg text-red-700">4 200 DZD</span>
          </h1>
        </div>
        {/* Information div */}
        <div className="flex flex-col w-full">
          <div className="flex text-lg md:text-xl items-center">
            <h1>Size : </h1>
            <div className="ml-2 flex gap-8">
              <div
                className=" w-[50px] flex justify-center items-center bg-black text-white  h-[50px] cursor-pointer"
                onClick={handleClickSelectedValue}
                name="XS"
                value="XS"
              >
                XS
              </div>
              <div
                className=" w-[50px] flex justify-center items-center bg-black text-white  h-[50px] cursor-pointer"
                onClick={handleClickSelectedValue}
                name="S"
                value="S"
              >
                S
              </div>
              <div
                className=" w-[50px] flex justify-center items-center bg-black text-white  h-[50px] cursor-pointer"
                onClick={handleClickSelectedValue}
                name="L"
                value="L"
              >
                L
              </div>
              <div
                className=" w-[50px] flex justify-center items-center bg-black text-white  h-[50px] cursor-pointer"
                onClick={handleClickSelectedValue}
                name="XL"
                value="XL"
              >
                XL
              </div>
              <div
                className=" w-[50px] flex justify-center items-center bg-black text-white  h-[50px] cursor-pointer"
                onClick={handleClickSelectedValue}
                name="XXL"
                value="XXL"
              >
                XXL
              </div>
            </div>
          </div>
          <div className="py-8 md:py-12">
            <div className="py-2">
              <button className="w-full flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white py-1 rounded-xl px-7 transition-all duration-700">
                <FaPlus className="text-sm font-semibold" />
                <span className="p-2">Add To Cart</span>
              </button>
            </div>
            <div className="py-2">
              <button className="w-full flex justify-center items-center border-black border-2 hover:bg-black hover:text-white py-1 rounded-xl px-7 transition-all duration-500 text-black">
                <span className="p-2">Buy this item</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between px-10 md:px-20">
            <button className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white py-2 rounded-lg px-4 md:px-7 transition-all duration-700">
              <CiHeart />
              <span className="p-1">Wishlist</span>
            </button>
            <button
              className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white py-2 rounded-lg px-4 md:px-7 transition-all duration-700"
              onClick={handleCopyPathname}
            >
              <IoShareSocialOutline />
              <span className="p-1">{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
