"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Page = () => {
  const [closeHeader, setCloseHeader] = useState(true);

  function handleClick() {
    setCloseHeader((prev) => !prev);
  }

  return (
    <div>
      {closeHeader ? (
        <div className="h-[50px] border-b-[1px] border-black flex justify-center items-center transition-all duration-500 ease-in-out">
          <div>
            <h1 className="font-Roboto flex items-center font-semibold">
              you are loged in as boutefli9a from here you can manage your store
            </h1>
          </div>
          <div className="cursor-pointer ml-4" onClick={handleClick}>
            <MdClose />
          </div>
        </div>
      ) : (
        <div className="h-0 transition-all duration-500 ease-in-out"></div>
      )}
    </div>
  );
};

export default Page;
