"use client";
import React, { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { FaLongArrowAltRight, FaRegEye, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineStorefront } from "react-icons/md";

import LineChart from "@/components/admin/LineChart";
import { UserData } from "./Data";

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

  return (
    <div className="flex w-full h-screen flex-col p-4">
      <div className="flex justify-center">
        <div className="flex flex-cols items-center justify-center gap-4 w-[80%]">
          <div className="w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#E5E1FF] rounded-lg">
              <CiWallet className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">
              Total Earnings
            </h2>
            <h3 className="text-2xl font-bold pt-[px]">$98,851.35</h3>
            <p className="text-black text-opacity-60 pt-[17px]">
              18.30 than last week
            </p>
          </div>
          <div className="w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#D2EDF6] rounded-lg">
              <MdOutlineStorefront className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">Orders</h2>
            <h3 className="text-2xl font-bold pt-[px]">65,802</h3>
            <p className="text-black text-opacity-60 pt-[17px]">
              18.30 than last week
            </p>
          </div>
          <div className="w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#FCF2DA] rounded-lg">
              <FaRegUserCircle className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">Customers</h2>
            <h3 className="text-2xl font-bold pt-[px]">79,958</h3>
            <p className="text-black text-opacity-60 pt-[17px]">
              18.30 than last week
            </p>
          </div>
          <div className="w-[407px] h-[167px] bg-white border-2 flex flex-col px-6 py-2">
            <span className="flex justify-center items-center bg-[#DBE9FF] rounded-lg">
              <FaRegEye className="text-[40px]" />
            </span>
            <h2 className="text-xl text-black text-opacity-60">
              Affiliate Users
            </h2>
            <h3 className="text-2xl font-bold pt-[px]">36,758</h3>
            <p className="text-black text-opacity-60 pt-[17px]">
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
        <div className="flex items-center flex-row">
          <div className="border-[1px] w-[1190px] h-[500px]">
            <LineChart chartData={userData} />
          </div>
          <div className="w-[400px] h-[500px] border-[1px] justify-center items-center flex flex-col gap-6">
            <div className="bg-[white] w-full h-[30%] flex justify-center items-center">
              <img
                className="w-[80%] h-[80%] object-cover rounded-lg"
                src="https://cdn.pixabay.com/photo/2016/04/27/14/53/chihuahua-1356758_640.jpg"
                alt="Chart Info"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 items-center justify-center w-full h-[179px]">
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
