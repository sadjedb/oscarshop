import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-screen flex-col items-center">
      <div className="flex w-[60%] h-[100px] justify-between items-center bg-[#F5F5F5]">
        <div className="flex justify-center items-center px-4 font-montserrat font-semibold ">
          <p
            className={`border-[1px] border-black rounded-full px-3 bg-black text-white } `}
          >
            1
          </p>
          <p className="px-3 text-xl"> SHOPPING CART</p>
        </div>

        <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
          <p className={`border-[1px] border-black rounded-full px-3 }`}>2</p>
          <p className="px-3 text-xl"> CHECKOUT</p>
        </div>
        <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
          <p className={`border-[1px] border-black rounded-full px-3 `}>3</p>
          <p className="px-3 text-xl"> ORDER COMPLETE</p>
        </div>
      </div>
      <form action=""></form>
      <div></div>
    </div>
  );
};

export default page;
