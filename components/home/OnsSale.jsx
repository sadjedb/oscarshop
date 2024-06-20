import React from "react";

const OnsSale = () => {
  const sales = [
    {
      categorie: "sweatpants",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3620-600x600.jpeg",
      descreprion: "T-shirt 1",
      sale: "-19%",
      price: "4 200",
      priceAfterSale: "3 800",
    },
    {
      categorie: "shirts",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3625-600x600.jpeg",
      descreprion: "T-shirt 2",
      sale: "-19%",
      price: "4 200",
      priceAfterSale: "3 800",
    },
    {
      categorie: "hoodies",
      name: "BROOKLYN EXCLUSIVE WHITE OVERSIZED HOODIE",
      image:
        "https://uptownoire.com/wp-content/uploads/2024/05/img_3628-600x600.jpeg",
      descreprion: "T-shirt 3",
      sale: "-19%",
      price: "4 200",
      priceAfterSale: "3 800",
    },
  ];
  const AllSales = sales.map((sale) => {
    return (
      <a
        key={sale.name}
        href={`home/${sale.name}`}
        className="border-[1px] hover:scale-110 transition-all duration-700 rounded-xl  shadow-lg  hover:shadow-2xl hover:border-black  hover:border-[1px] font-montserrat "
      >
        <div className="flex  bg-[#F5F5F5] w-full h-full ">
          <img
            src={sale.image}
            className="w-full flex justify-start  "
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl text-black opacity-75 pt-5 justify-center items-center flex mx-auto font-montserrat">
            {sale.name}{" "}
          </p>

          <span className="flex gap-10">
            <p className="text-xl text-black opacity-75 line-through	text-decoration-line: line-through; pt-5 font-bold font-montserrat">
              {sale.price} DZA
            </p>
            <p className="text-xl  text-black pb-8 pt-5 font-bold font-montserrat ">
              {sale.priceAfterSale} DZA
            </p>
          </span>
        </div>
      </a>
    );
  });
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="">
        <div className="flex flex-col justify-center items-center py-8">
          <p className="text-6xl py-4 font-montserrat font-montserrat-bold">
            ON SALE !!
          </p>
          <p className="py-2">Profit now from the mega sales before it ends</p>
          <a href="">
            <button className="bg-black text-white px-4 py-2 rounded-lg  ">
              All Sales
            </button>
          </a>
        </div>
        <div className="justify-center flex ">
          <div className="flex flex-row w-[70%] gap-7 justify-center items-center ">
            {AllSales}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnsSale;
