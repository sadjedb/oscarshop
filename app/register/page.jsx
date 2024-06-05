"use client";
import { VscAccount } from "react-icons/vsc";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const page = () => {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log(creds);
  return (
    // main div
    <div className="h-screen w-full flex flex-row justify-center items-center p-16">
      <div className="hidden md:w-[60%] md:flex h-[90%] bg-black md:border-black">
        <h1 className="flex justify-center items-center text-white w-full font-PoetsenOne text-7xl">
          OSCAR SHOP
        </h1>
      </div>
      {/* right div */}
      <div className="w-[40%] h-[90%] bg-white flex justify-center items-center md:border-[1px] border-black  ">
        {/* form div */}
        <div className="p-4 ">
          <form action="Login" className="gap-4 flex flex-col relative">
            <h1 className="text-2xl font-bold">Hello!</h1>
            <h3 className="font-semibold text-black text-opacity-85 font-Roboto">
              Sign up to Get Started
            </h3>
            <div className="flex flex-col gap-3">
              <input
                onChange={handleChange}
                value={creds.name}
                name="name"
                type="text"
                placeholder="Full Name"
                className="bg-[#f5f5f5] h-[40px] rounded-lg w-[335px] flex p-4 font-Roboto text-opacity-30 text-black relative pl-14"
              />
              <VscAccount className="absolute text-xl flex items-center justify-center top-[97px] text-opacity-30 left-4 text-black   " />

              <input
                onChange={handleChange}
                value={creds.email}
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-[#f5f5f5] h-[40px] rounded-lg w-[335px] flex p-4 font-Roboto text-opacity-30 text-black pl-14"
              />
              <MdOutlineEmail className="absolute text-xl flex items-center justify-center top-[147px] text-opacity-30 left-4 text-black" />
              <input
                onChange={handleChange}
                value={creds.password}
                name="password"
                type="password"
                placeholder="Password"
                className="bg-[#f5f5f5] h-[40px] rounded-lg w-[335px] flex p-4 font-Roboto text-opacity-30 text-black pl-14"
              />
              <FaLock className="absolute text-xl flex items-center justify-center top-[200px] text-opacity-30 left-4 text-black   " />
              <input
                onChange={handleChange}
                value={creds.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="bg-[#f5f5f5] h-[40px] rounded-lg w-[335px] flex p-4 font-Roboto text-opacity-30 text-black pl-14"
              />
              <div className="pt-4">
                <button className="bg-black h-[45px] rounded-lg w-[335px] flex p-4 font-Roboto text-opacity-30 text-black  justify-center items-center pt-5">
                  <p className="text-white flex text-[19px]">Register</p>
                </button>
                <div className="pt-3 font-Roboto">
                  <a href="/login">
                    You already have an account ?{" "}
                    <span className="font-bold"> Click here</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
