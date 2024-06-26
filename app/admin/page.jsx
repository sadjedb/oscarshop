"use client";
import React, { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FaRegEye, FaRegUserCircle, FaUserCog } from "react-icons/fa";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import {
  MdDashboard,
  MdOutlineStorefront,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import LineChart from "@/components/admin/LineChart";
import { UserData } from "./Data";
import { BsCashCoin } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const Page = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "white",
        borderColor: "black",
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: "black",
        borderColor: "black",
        borderDash: [5, 5],
      },
    ],
  });
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="flex w-full h-screen flex-col p-4">
      {
        <div className="">
          <div className="">
            <button
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={`fixed text-5xl ${
                !toggleSidebar ? "block" : "hidden"
              }`}
            >
              <GoSidebarCollapse />
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 w-[300px] h-screen bg-white  transition-transform duration-300 ${
              toggleSidebar
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <button
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className="flex justify-between w-full p-2 bg-white text-4xl text-black "
            >
              <span className="text-3xl font-poetsenOne py-4">Menu:</span>
              <div className="flex py-4">
                <GoSidebarExpand className="" />
              </div>
            </button>
            <div className="flex text-black  flex-col gap-10 px-2">
              <a href="" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-black hover:bg-white hover:text-black border-2 border-black text-white  transition-all duration-700 px-4 py-2 rounded-lg">
                  <MdDashboard className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Dashboard</span>
                </div>
              </a>
              <a href="./admin/orders" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <BsCashCoin className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Orders</span>
                </div>
              </a>
              <a href="./admin/products" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <MdProductionQuantityLimits className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Products</span>
                </div>
              </a>
              <a href="./admin/profile" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <CgProfile className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2"> Profile</span>
                </div>
              </a>
              <a href="./admin/users" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <FaUserCog className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Users Management</span>
                </div>
              </a>
              <a href="./admin/addProduct" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <IoIosAddCircleOutline className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Add New Product</span>
                </div>
              </a>
              <a href="./admin/addCategory" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <IoIosAddCircleOutline className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Add New Category</span>
                </div>
              </a>
              <div className="w-full flex pt-44">
                <a href="">
                  <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                    <FiLogOut className="text-xl text-black hover:text-white" />
                    Disconnect
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="w-full md:w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#E5E1FF] rounded-lg">
              <CiWallet className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">
              Total Earnings
            </h2>
            <h3 className="text-2xl font-bold pt-1">$98,851.35</h3>
            <p className="text-black text-opacity-60 pt-2">
              18.30 than last week
            </p>
          </div>
          <div className="w-full md:w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#D2EDF6] rounded-lg">
              <MdOutlineStorefront className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">Orders</h2>
            <h3 className="text-2xl font-bold pt-1">65,802</h3>
            <p className="text-black text-opacity-60 pt-2">
              18.30 than last week
            </p>
          </div>
          <div className="w-full md:w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#FCF2DA] rounded-lg">
              <FaRegUserCircle className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">Customers</h2>
            <h3 className="text-2xl font-bold pt-1">79,958</h3>
            <p className="text-black text-opacity-60 pt-2">
              18.30 than last week
            </p>
          </div>
        </div>
      </div>
      {/* center div (chart and infos) */}
      <div className="flex items-center flex-col pt-5">
        <div className="flex w-[1590px] h-[97px] border-[1px] border-b-none">
          <p className="text-xl font-semibold flex items-center justify-start ml-8">
            Revenue :
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full px-4 justify-center items-center">
          <div className="border-[1px] w-full md:w-[1190px] h-[500px] p-4">
            <LineChart chartData={userData} />
          </div>
          <div className="w-full md:w-[400px] h-[500px] border-[1px] flex flex-col items-center gap-6 p-4">
            <div className="bg-white w-full h-[30%] flex justify-center items-center">
              <img
                className="w-[80%] h-[80%] object-cover rounded-lg"
                src="https://cdn.pixabay.com/photo/2016/04/27/14/53/chihuahua-1356758_640.jpg"
                alt="Chart Info"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 items-center justify-center w-full h-[179px] gap-4">
              <span className="flex items-center justify-center border-[1px] h-full w-full flex-col">
                <h1 className="text-xl font-semibold">65,802</h1>
                <p className="text-black text-opacity-60">Orders</p>
              </span>
              <span className="flex items-center justify-center border-[1px] h-full w-full flex-col">
                <h1 className="text-xl font-semibold">$98,851.35k</h1>
                <p className="text-black text-opacity-60">Earnings</p>
              </span>
              <span className="flex items-center justify-center border-[1px] h-full w-full flex-col">
                <h1 className="text-xl font-semibold">2,450</h1>
                <p className="text-black text-opacity-60">Refunds</p>
              </span>
              <span className="flex items-center justify-center border-[1px] h-full w-full flex-col">
                <h1 className="text-xl font-semibold text-[#06D6A0]">18.92%</h1>
                <p className="text-black text-opacity-60">Conversion Ratio</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
