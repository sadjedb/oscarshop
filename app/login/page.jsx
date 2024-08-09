"use client";
import { VscAccount } from "react-icons/vsc";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const login = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3001/login",
      data: creds,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Login successful");
          router.push("/home");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert("Login failed: Invalid credentials");
        } else {
          alert("An error occurred during login");
        }
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-full flex flex-row justify-center items-center p-16">
      <div className="hidden md:w-[60%] md:flex h-[90%] bg-black md:border-black">
        <h1 className="flex justify-center items-center text-white w-full font-PoetsenOne text-7xl">
          OSCAR SHOP
        </h1>
      </div>
      <div className="w-full md:w-[40%] h-[90%] bg-white flex justify-center items-center md:border-[1px] border-black">
        <div className="p-4 w-full md:w-[80%]">
          <form
            action="Login"
            className="gap-4 flex flex-col relative"
            onSubmit={login} // Attach onSubmit handler to the form
          >
            <h1 className="text-2xl font-bold">Hello!</h1>
            <h3 className="font-semibold text-black text-opacity-85 font-Roboto">
              Login and start exploring
            </h3>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  onChange={handleChange}
                  value={creds.email}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="bg-[#f5f5f5] h-[40px] rounded-lg w-full  md:w-[335px] flex p-4 font-Roboto text-opacity-30 text-black pl-14"
                />
                <MdOutlineEmail className="md:absolute hidden text-xl md:flex items-center justify-center top-[97px] md:top-[10px] text-opacity-30 left-4 text-black" />
              </div>
              <div className="relative">
                <input
                  onChange={handleChange}
                  value={creds.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-[#f5f5f5] h-[40px] rounded-lg w-full md:w-[335px] flex p-4 font-Roboto text-opacity-30 text-black pl-14"
                />
                <FaLock className="md:absolute hidden text-xl md:flex items-center justify-center top-[150px] md:top-[10px] text-opacity-30 left-4 text-black" />
              </div>
              <div className="pt-4">
                <button
                  type="submit" // Set button type to submit to trigger form submission
                  className="bg-black h-[45px] rounded-lg w-full md:w-[335px] flex p-4 font-Roboto text-opacity-30 text-black justify-center items-center pt-5"
                >
                  <p className="text-white flex text-[19px]">Login</p>
                </button>
                <div className="pt-3 font-Roboto">
                  <a href="/register">
                    You don't have an account?
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

export default Page;
