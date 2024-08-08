"use client";
import React from "react";

const Page = () => {
  function handleDisconnect(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Profile page content</p>
      <div>
        <button
          className="flex justify-center items-center bg-black hover:bg-white hover:text-black border-2 border-black text-white transition-all duration-700 px-4 py-2 rounded-lg"
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default Page;
