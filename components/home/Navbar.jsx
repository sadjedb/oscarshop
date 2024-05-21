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
          <h1>New In</h1>
          <h1>Free Delivery</h1>
          <h1>Sales</h1>
          <h1>Oscar's brand</h1>
          <h1>Full Outfits</h1>
        </div>
        {/* Search Bar */}
        {searchBar && (
          <div className="flex items-center justify-center w-[400px] md:w-[50%]  h-[40px] relative">
            <input
              type="text"
              value={navBarData.searchValue}
              onChange={handleSearchInputChange}
              placeholder="Search"
              className="flex-grow h-full px-4 rounded-lg border border-black focus:outline-none"
            />
          </div>
        )}
        <div className="flex items-center gap-8">
          <div
            className="flex items-center  text-3xl"
            onClick={handleSearchBar}
          >
            <IoIosSearch />
          </div>
          <div className="flex items-center text-sm">
            <a href="" className="text-3xl">
              <CiHeart />
            </a>
            <p>({navBarData.wishListNb})</p>
          </div>
          <div className="flex items-center text-sm">
            <a href="" className="text-3xl">
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
