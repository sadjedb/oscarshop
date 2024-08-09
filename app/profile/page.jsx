"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import cities from "./data";

const Page = () => {
  const router = useRouter();

  const [fullname, setFullname] = useState("loading");
  const [email, setEmail] = useState("loading");
  const [Wilayaa, setWilayaa] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/login", {
          withCredentials: true,
        });
        setFullname(res.data.username);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber || "");
        setAddress(res.data.address || "");
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  const handleDisconnect = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push("/home");
        console.log("Logged out successfully");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleWilayaChange = (event) => {
    setWilayaa(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const WilayaNames = cities.map((Wilaya) => (
    <option key={Wilaya.id} value={Wilaya.id}>
      {Wilaya.name}
    </option>
  ));

  const changeinfos = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/changeInfo",
        {
          username: fullname,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          wilaya: Wilayaa,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("User information updated successfully");
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  return (
    <div className="w-full h-screen flex px-14 pt-10">
      <div className="flex w-4/5 flex-col">
        <h1 className="flex p-2 py-4 text-3xl font-roboto">
          Welcome <span className="font-bold uppercase px-2"> {fullname} </span>
          To the store
        </h1>
        <div>
          <h1 className="text-2xl font-roboto p-2">Your Profile</h1>
          <div className="flex flex-col p-2">
            <ProfileField label="Username" value={fullname} />
            <ProfileField label="Email" value={email} />
            <ProfileField
              label="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <div className="flex gap-3 items-center text-xl py-4">
              Wilaya:
              <select
                onChange={handleWilayaChange}
                value={Wilayaa}
                className="border-black border-2 rounded-lg h-[35px] text-xl font-bold w-[200px] overflow-hidden text-ellipsis"
              >
                <option value="" disabled>
                  Choose
                </option>
                {WilayaNames}
              </select>
              <button
                className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white transition-all duration-700 px-4 h-[35px] rounded-lg"
                onClick={changeinfos}
              >
                Change
              </button>
            </div>
            <ProfileField
              label="Address"
              value={address}
              onChange={handleAddressChange}
            />
            <button
              onClick={changeinfos}
              className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white transition-all duration-700 px-4 h-[35px] rounded-lg"
            >
              Change
            </button>
          </div>
          <div>
            <button
              className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white transition-all duration-700 px-4 py-2 rounded-lg"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/5 h-3/5 border-2 border-black flex flex-col justify-center items-center pt-10">
        Profile card
        <div className="flex flex-col">
          <div>Name: {fullname}</div>
          <div>Wilaya: {Wilayaa}</div>
          <div>Phone: {phoneNumber}</div>
          <div>Points: </div>
          <div>Orders successful/failed: 10/3</div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, onChange }) => (
  <div className="flex gap-3 items-center text-xl py-4">
    {label}:
    <input
      className="flex border-2 border-black rounded-lg w-1/2 h-[35px] p-3"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Page;
