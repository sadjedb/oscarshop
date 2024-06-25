"use client";
import React, { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Logo from "./../../assets/Home/Navbar/Logo.jpg";

const Navbar = () => {
  const [navBarData, setNavBarData] = useState({
    searchValue: "",
    wishListNb: 0,
    cartProductNb: 0,
  });
  console.log(navBarData);
  const [searchBar, setSearchBar] = useState(false);

  function handleSearchBar() {
    setSearchBar((prev) => !prev);
  }

  function handleSearchInputChange(event) {
    const { value } = event.target;
    setNavBarData((prevData) => ({ ...prevData, searchValue: value }));
  }

  return (
    <div className="w-full h-[70px] flex items-center border-b-black border-b-[1px]">
      <div className="flex flex-row w-full justify-between">
        {!searchBar && (
          <div className="md:flex hidden justify-start items-center w-[100px]">
            <img src={Logo.src} alt="logo img" />
          </div>
        )}
        <div className="flex-grow md:flex hidden gap-10 font-Roboto font-semibold text-black opacity-75 justify-center items-center">
          <a href="./home/new-in">
            <h1 className="hover:bg-black hover:text-white py-2 px-2 hover:border-[1px] border-black rounded-xl transition-all duration-500 font-montserrat  ">
              New In
            </h1>
          </a>
          <a href="./home/free-delivery">
            <h1 className="hover:bg-black hover:text-white py-2 px-2 hover:border-[1px] border-black rounded-xl transition-all duration-300 font-montserrat  ">
              Free Delivery
            </h1>
          </a>
          <a href="./home/sales">
            <h1 className="hover:bg-black hover:text-white py-2 px-2 hover:border-[1px] border-black rounded-xl transition-all duration-300 font-montserrat  ">
              Sales
            </h1>
          </a>
          <a href="./home/oscar-brand">
            <h1 className="hover:bg-black hover:text-white py-2 px-2 hover:border-[1px] border-black rounded-xl transition-all duration-300 font-montserrat  ">
              Oscar's brand
            </h1>
          </a>
          <a href="./home/fulloutfit">
            <h1 className="hover:bg-black hover:text-white py-2 px-2 hover:border-[1px] border-black rounded-xl transition-all duration-300 font-montserrat  ">
              Full Outfits
            </h1>
          </a>
        </div>
        {/* Search Bar */}
        <div
          className={`flex items-center justify-center  relative transition-all duration-500 ease-out ${
            searchBar
              ? "w-[700px] opacity-100 items-center justify-center "
              : "w-0 opacity-0 overflow-hidden items-center justify-center"
          }`}
        >
          <input
            type="text"
            value={navBarData.searchValue}
            onChange={handleSearchInputChange}
            placeholder="Search"
            className="flex-grow  h-[40px]  px-4 rounded-lg border border-black focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-8">
          <div
            className="flex items-center text-3xl cursor-pointer"
            onClick={handleSearchBar}
          >
            <IoIosSearch />
          </div>
          <div>
            <a href="/login">
              <button className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white  transition-all duration-700 px-4 py-2 rounded-lg">
                Login
              </button>
            </a>
          </div>
          <div className="flex items-center text-sm">
            <a
              href=""
              className="text-3xl hover:text-red-600 transition-all duration-500"
            >
              <CiHeart />
            </a>
            <p>({navBarData.wishListNb})</p>
          </div>
          <div className="flex items-center text-sm">
            <a href="/home/cart" className="text-3xl">
              <CiShoppingCart />
            </a>
            <p>({navBarData.cartProductNb})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
