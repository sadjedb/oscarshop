"use client";
import React, { useState } from "react";

const Page = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      category: "sweatpants",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3620-600x600.jpeg",
      description: "PM ELASTIC LOOSE FIT SWEATPANTS IN BLACK - L",
      price: 4200,
      quantity: 1,
    },
    {
      category: "shirts",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3625-600x600.jpeg",
      description: "PM ELASTIC LOOSE FIT SWEATPANTS IN BLACK - L",
      price: 4200,
      quantity: 1,
    },
    {
      category: "hoodies",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3628-600x600.jpeg",
      description: "PM ELASTIC LOOSE FIT SWEATPANTS IN BLACK - L",
      price: 4200,
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState({
    couponCode: "",
  });

  const [discount, setDiscount] = useState(0);
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);

  const [selectedValue, setSelectedValue] = useState("CashOnDelivery");

  const shippingPrice = 900;

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  function handleCouponInputChange(event) {
    const { value } = event.target;
    setCouponCode((prevData) => ({ ...prevData, couponCode: value }));
  }

  const handleApplyCoupon = () => {
    let priceAfterDiscount = 0;
    let discountApplied = 0;

    if (couponCode.couponCode === "OSCAR2021") {
      console.log("Coupon Code is valid");
      discountApplied = totalPrice * 0.19;
      priceAfterDiscount = totalPrice - discountApplied + shippingPrice;
    } else {
      console.log("Coupon Code is not valid");
      priceAfterDiscount = totalPrice + shippingPrice;
    }

    setDiscount(discountApplied);
    setTotalPriceAfterDiscount(priceAfterDiscount);
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex w-full h-screen flex-col items-center ">
      <div className="flex w-[60%] h-[100px] justify-between items-center bg-[#F5F5F5] ">
        <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3">1</p>
          <p className="px-3 text-xl"> SHOPPING CART</p>
        </div>
        <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3 bg-black text-white">
            2
          </p>
          <p className="px-3 text-xl"> CHECKOUT</p>
        </div>
        <div className="flex justify-center items-center px-4 font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3">3</p>
          <p className="px-3 text-xl"> ORDER COMPLETE</p>
        </div>
      </div>
      <div className="w-[50%] flex justify-between  gap-16 h-[500px] pt-14 ">
        <form action="">
          <h1 className="text-2xl font-bold py-2 border-b-[2px] border-[#9C9C9C]">
            Personal Information
          </h1>
          <div className="py-4 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="flex border-[1px] border-black w-full rounded-xl px-3 py-2"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border-[1px] border-black rounded-xl px-3 py-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-[1px] border-black rounded-xl px-3 py-2"
            />
          </div>
          <h1 className="text-2xl font-bold py-2 border-b-[2px] border-[#9C9C9C]">
            Shipping Address
          </h1>
          <div className="py-4 w-full">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border-[1px] border-black rounded-xl w-[250px] px-3 py-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border-[1px] border-black rounded-xl w-[160px] px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="border-[1px] border-black rounded-xl px-3 py-2"
            />
            <input
              type="text"
              placeholder="Wilaya"
              className="border-[1px] border-black rounded-xl px-3 py-2"
            />
          </div>
          <h1 className="text-2xl font-bold py-2 border-b-[2px] border-[#9C9C9C]">
            Payment Method
          </h1>
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <input
                  type="radio"
                  name="Payment"
                  value="CashOnDelivery"
                  checked={selectedValue === "CashOnDelivery"}
                  onChange={() => handleRadioChange("CashOnDelivery")}
                  id="CashOnDelivery"
                  className="mr-1 flex appearance-none border-[1px] border-black rounded-full w-[15px] h-[15px] items-center justify-center checked:bg-black"
                />
                <label htmlFor="CashOnDelivery">Cash On Delivery</label>
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="radio"
                  name="Payment"
                  value="Edhahabia"
                  checked={selectedValue === "Edhahabia"}
                  onChange={() => handleRadioChange("Edhahabia")}
                  id="Edhahabia"
                  className="mr-1 flex appearance-none border-[1px] border-black rounded-full w-[15px] h-[15px] items-center justify-center checked:bg-black"
                />
                <label htmlFor="Edhahabia">Edhahabia</label>
              </div>
            </div>
            {selectedValue === "Edhahabia" && (
              <div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="CardHolder Name"
                    className="flex border-[1px] border-black w-full rounded-xl px-3 py-2"
                  />
                </div>
                <div className="py-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="flex border-[1px] border-black w-full rounded-xl px-3 py-2"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="EXP Date"
                    className="border-[1px] border-black rounded-xl px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border-[1px] border-black rounded-xl px-3 py-2"
                  />
                </div>
              </div>
            )}
          </div>
        </form>

        <div className="flex w-full min-h-auto rounded-xl border-2 ">
          <div className="w-full rounded-xl ">
            <h1 className="w-full border-b-[2px] font-bold text-2xl py-2 pl-4 border-[#9C9C9C]">
              Item
            </h1>
            <div className="">
              <div className="flex flex-col text-[14px]">
                {cartProducts.map((product, index) => (
                  <div className="flex py-6 mx-auto border-b-[1px] w-full ">
                    <div className="">
                      <img
                        src={product.image}
                        alt=""
                        className="w-[120px] object-cover pr-4 pl-4"
                      />
                    </div>
                    <div className="flex-col flex justify-between ">
                      <p>Product Name : {product.name}</p>
                      <p>Product Price : {product.price}</p>
                      <p>Product Quantity :{product.quantity}</p>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col pb-4 justify-between pl-4 text-lg ">
                  <div className="py-[2px]">Subtotal : {totalPrice} DZD</div>
                  <div className="py-[2px]">Discount : {discount} DZD </div>
                  <div className="border-b-[1px] pb-4 w-full py-[2px]">
                    Shipping : 900 DZD
                  </div>
                  <div className="flex gap-6 justify-center items-center pt-2">
                    <input
                      type="text"
                      name="coupon"
                      onChange={handleCouponInputChange}
                      className="flex border-[1px] border-black rounded-xl px-3 text-sm py-2"
                    />
                    <button
                      className="bg-black text-white py-2 rounded-lg px-7"
                      onClick={handleApplyCoupon}
                    >
                      Apply Coupon
                    </button>
                  </div>
                  <div className="pt-4 text-xl font-semibold">
                    Total :{" "}
                    {totalPriceAfterDiscount === 0
                      ? totalPrice
                      : totalPriceAfterDiscount}{" "}
                    DZD
                  </div>
                </div>
              </div>
              <div className="pl-4 justify-center flex">
                <a href="./checkout/finalStep">
                  <button className="bg-black text-white py-2 rounded-lg px-12">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
