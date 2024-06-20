"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="flex w-full h-screen flex-col justify-center items-center">
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

      <div className="flex w-[60%] h-full pt-40 flex-col">
        <div className="flex gap-3 border-b-[1px]">
          <h1 className="pl-32">PRODUCT</h1>
          <h1 className="pl-[393px]">PRICE</h1>
          <h1 className="pl-[54px]">QUANTITY</h1>
          <h1 className="pl-[40px]">SUBTOTAL</h1>
        </div>
        {cartProducts.map((product, index) => (
          <div key={index} className="flex w-[100%] gap-7 py-5 items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[100px] h-[100px]"
            />
            <p>{product.description}</p>
            <p className="pl-[80px] pr-10">{product.price} DZD</p>
            <p>{product.quantity}</p>
            <p className="pl-[65px]">{product.price * product.quantity} DZD</p>
            <div className="text-3xl flex gap-7 mx-auto">
              <button
                className="border-[1px] rounded-full px-2 items-center justify-center"
                onClick={() => addQuantity(index)}
              >
                +
              </button>
              <button
                className="border-[1px] rounded-full px-3 items-center justify-center"
                onClick={() => minusQuantity(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <div className="flex p-4">
          <div className="flex">
            <a href="./cart/checkout">
              <div className="py-4 px-4">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Proceed to Checkout
                </button>
              </div>
            </a>

            <a href="/">
              <div className="py-4 px-4">
                <button className="bg-black text-white px-4 py-2 rounded">
                  Continue Shopping
                </button>
              </div>
            </a>
          </div>
          <p className="flex justify-center items-center pl-[427px] text-xl font-montserrat font-bold">
            TOTAL PRICE: {totalPrice} DZD
          </p>
        </div>
      </div>
    </div>
  );
}
