"use client";
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  console.log(usePathname());
  return (
    <aside className="">
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
              <a href="../admin/dashboard" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <MdDashboard className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Dashboard</span>
                </div>
              </a>
              <a href="../admin/orders" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <BsCashCoin className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Orders</span>
                </div>
              </a>
              <a href="../admin/products" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <MdProductionQuantityLimits className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Products</span>
                </div>
              </a>
              <a href="../admin/profile" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <CgProfile className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2"> Profile</span>
                </div>
              </a>
              <a href="../admin/users" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <FaUserCog className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Users Management</span>
                </div>
              </a>
              <a href="../admin/addProduct" className="">
                <div className="font-roboto font-semibold flex items-center justify-center bg-white hover:bg-black hover:text-white border-2 border-black text-black  transition-all duration-700 px-4 py-2 rounded-lg">
                  <IoIosAddCircleOutline className="text-2xl flex items-center justify-center" />{" "}
                  <span className="pl-2">Add New Product</span>
                </div>
              </a>
              <a href="../admin/addCategory" className="">
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
    </aside>
  );
};

export default SideBar;
