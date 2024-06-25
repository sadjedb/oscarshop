"use client";
import { useState } from "react";
import React from "react";

const page = () => {
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

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const updateQuantity = (index, delta) => {
    setCartProducts((prev) => {
      return prev.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            quantity: product.quantity + delta,
          };
        }
        return product;
      });
    });
  };

  const addQuantity = (index) => {
    updateQuantity(index, 1);
  };

  const minusQuantity = (index) => {
    if (cartProducts[index].quantity === 1) {
      setCartProducts((prev) => prev.filter((_, i) => i !== index));
    } else {
      updateQuantity(index, -1);
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col justify-center items-center p-4">
      <div className="flex w-full lg:w-[60%] h-[100px] justify-between items-center bg-[#F5F5F5] p-4 rounded-lg">
        <div className="flex justify-center items-center font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3 bg-black text-white">
            1
          </p>
          <p className="px-3 text-lg md:text-xl">SHOPPING CART</p>
        </div>
        <div className="flex justify-center items-center font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3">2</p>
          <p className="px-3 text-lg md:text-xl">CHECKOUT</p>
        </div>
        <div className="flex justify-center items-center font-montserrat font-semibold">
          <p className="border-[1px] border-black rounded-full px-3">3</p>
          <p className="px-3 text-lg md:text-xl">ORDER COMPLETE</p>
        </div>
      </div>
      <div className="flex w-full lg:w-[60%] flex-col pt-8 md:pt-20">
        <div className="flex gap-3 border-b-[1px] p-4">
          <h1 className="flex-1 text-center">PRODUCT</h1>
          <h1 className="hidden md:block flex-1 text-center">PRICE</h1>
          <h1 className="hidden md:block flex-1 text-center">QUANTITY</h1>
          <h1 className="hidden md:block flex-1 text-center">SUBTOTAL</h1>
        </div>
        {cartProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full gap-3 py-5 items-center border-b-[1px] p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[100px] h-[100px] object-cover"
            />
            <p className="flex-1 text-center md:text-left">
              {product.description}
            </p>
            <p className="flex-1 text-center md:text-left md:flex-none">
              {product.price} DZD
            </p>
            <div className="flex items-center gap-2">
              <button
                className="border-[1px] rounded-full px-2"
                onClick={() => addQuantity(index)}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                className="border-[1px] rounded-full px-2"
                onClick={() => minusQuantity(index)}
              >
                -
              </button>
            </div>
            <p className="flex-1 text-center md:text-left md:flex-none">
              {product.price * product.quantity} DZD
            </p>
          </div>
        ))}
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex gap-4">
            <a href="./cart/checkout">
              <button className="bg-black text-white px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </a>
            <a href="/">
              <button className="bg-black text-white px-4 py-2 rounded">
                Continue Shopping
              </button>
            </a>
          </div>
          <p className="text-lg md:text-xl font-montserrat font-bold mt-4 md:mt-0">
            TOTAL PRICE: {totalPrice} DZD
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
