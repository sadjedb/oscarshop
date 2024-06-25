import React from "react";

import { BiSolidHeartCircle } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row h-[250px] border-t-[1px] border-black ">
      <div className="flex md:w-[45%] border-r-[1px] border-black">
        <div className="ml-4 md:ml-36 pt-11">
          <h1 className="font-Montserrat text-7xl text-black">OSCAR</h1>
          <h1 className="font-Montserrat text-7xl text-black opacity-40 ml-16">
            SHOP
          </h1>
        </div>
      </div>
      {/* Informations */}
      <div className="flex flex-col md:flex-row w-full justify-center pl-4">
        <div className="w-full text-xl font-Roboto border-r-[1px] border-black">
          <p className="text-xl font-semibold pt-5 pr-4 underline underline-offset-2">
            About Us
          </p>
          <div className="text-lg pr-4">
            <p className="pb-2 pt-4 pr-4">Our Mission</p>
            <p className="pb-2 pr-4">More About Product Quality</p>
            <p className="pb-2 pr-4">Site Map</p>
          </div>
        </div>
        <div className="w-full text-xl font-Roboto border-r-[1px] border-black">
          <p className="text-xl font-semibold pt-5  pl-4 underline underline-offset-2">
            Trending Now
          </p>
          <div className="text-lg pl-4">
            <p className="pb-2 pt-4 ">Product1</p>
            <p className="pb-2 ">Product2</p>
            <p className="pb-2 ">Product3</p>
            <p className="pb-2 ">Product4</p>
          </div>
        </div>
        <div className="w-full text-xl font-Roboto">
          <p className="text-xl font-semibold pt-5 pl-4 underline underline-offset-2">
            Help
          </p>
          <div className="text-lg pl-4">
            <p className="pb-2 pt-4">Help Center</p>
            <p className="pb-2">Community Guidelines</p>
            <p className="pb-2">How To Buy From Us</p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center items-center flex-col pr-16 md:pr-0">
        <p className="text-2xl font-bold pb-3 justify-center">
          Connect With us
        </p>
        <div className="flex flex-row gap-4 text-6xl text-black">
          <a href="https://x.com/lachemoilagrp">
            <BiSolidHeartCircle />
          </a>
          <a href="" className="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <RiInstagramFill />
          </a>
          <a href="">
            <AiFillTikTok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
