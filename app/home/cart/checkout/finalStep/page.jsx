import React from "react";

const page = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full h-screen  justify-center font-roboto ">
      <div className="w-full justify-center flex">
        <div className="flex w-[60%] h-[100px] justify-between items-center bg-[#F5F5F5] ">
          <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
            <p className="border-[1px] border-black rounded-full px-3">1</p>
            <p className="px-3 text-xl"> SHOPPING CART</p>
          </div>
          <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
            <p className="border-[1px] border-black rounded-full px-3 ">2</p>
            <p className="px-3 text-xl"> CHECKOUT</p>
          </div>
          <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
            <p className="border-[1px] border-black rounded-full px-3 bg-black text-white">
              3
            </p>
            <p className="px-3 text-xl"> ORDER COMPLETE</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">
          Thank you , Your order has been received.
        </h1>
        <div className="grid grid-rows-2 grid-cols-4 font-montserrat p-5 border-[1px]">
          <div className="flex justify-center items-center border-r-[1px]">
            ORDER NUMBER:
          </div>
          <div className="flex justify-center items-center border-r-[1px]">
            DATE:{" "}
          </div>
          <div className="flex justify-center items-center border-r-[1px]">
            TOTAL:{" "}
          </div>
          <div className="flex justify-center items-center  ml-4">
            PAYMENT METHODE:
          </div>
          <div className="flex justify-center items-center font-bold border-r-[1px]">
            000001
          </div>
          <div className="flex justify-center items-center font-bold border-r-[1px]">
            {formattedDate}
          </div>
          <div className="flex justify-center items-center font-bold border-r-[1px]">
            12 600DZD
          </div>
          <div className="flex justify-center items-center font-bold ml-4">
            Cash On Delivery
          </div>
        </div>
        <h1 className="text-2xl font-semibold">ORDER DETAILS</h1>
        <div className="flex justify-between items-center w-[40%] border-b-[2px] pb-1">
          <h1 className="flex">PRODUCT</h1>
          <h1 className="flex">TOTAL</h1>
        </div>
        <div className="flex flex-col justify-between items-center w-[40%] border-b-[2px] pb-1">
          <div className="flex justify-between w-full py-1">
            <p>Product Name</p>
            <p>Product Price</p>
          </div>
          <div className="flex justify-between w-full py-1">
            <p>Subtotal</p>
            <p>12 600DZD</p>
          </div>
          <div className="flex justify-between w-full py-1">
            <p>Shipping:</p>
            <p>900DZD </p>
          </div>
          <div className="flex justify-between w-full py-1">
            <p>Payment methode:</p>
            <p>Cash on Delivery</p>
          </div>
          <div className="flex justify-between w-full py-1">
            <p>Total:</p>
            <p>12 600DZD</p>
          </div>
        </div>
        <div className="w-[40%] py-4">
          <div className="flex justify-between w-full py-1 px-4 rounded-lg border-2 ">
            <p>Email:</p>
            <p>asdfsa@gmail.com</p>
          </div>
          <div className="pt-2">
            <div className="flex justify-between w-full py-1 px-4 rounded-lg border-2 ">
              <p>Address</p>
              <p>Address</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <button className=" bg-black text-white py-2 rounded-lg px-11">
          Download
        </button>
      </div>
    </div>
  );
};

export default page;
