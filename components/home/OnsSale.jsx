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

  const AllSales = sales.map((sale) => (
    <a
      key={sale.name}
      href={`home/${sale.name}`}
      className="border-[1px] sm:hover:border-[1px] hover:scale-110 transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl hover:border-black font-montserrat w-full sm:w-[45%] lg:w-[30%] mx-auto"
    >
      <div className="bg-[#F5F5F5] w-full h-full">
        <img
          src={sale.image}
          className="w-full h-full object-cover rounded-t-xl"
          alt={sale.descreprion}
        />
      </div>
      <div className="flex justify-center items-center flex-col p-4">
        <p className="text-xl md:text-2xl text-black opacity-75 pt-2 md:pt-5 text-center font-montserrat">
          {sale.name}
        </p>
        <span className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <p className="text-lg md:text-xl text-black opacity-75 line-through pt-2 md:pt-5 font-bold font-montserrat">
            {sale.price} DZA
          </p>
          <p className="text-lg md:text-xl text-black pt-2 md:pt-5 font-bold font-montserrat">
            {sale.priceAfterSale} DZA
          </p>
        </span>
      </div>
    </a>
  ));

  return (
    <div className="flex w-full min-h-screen justify-center items-center py-8">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center py-8">
          <p className="text-3xl sm:text-4xl md:text-6xl py-2 font-montserrat-bold">
            ON SALE !!
          </p>
          <p className="py-2 text-center text-sm md:text-base">
            Profit now from the mega sales before it ends
          </p>
          <a href="#">
            <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">
              All Sales
            </button>
          </a>
        </div>
        <div className="flex justify-center pt-8">
          <div className="flex flex-wrap gap-4 justify-center items-center w-full px-4">
            {AllSales}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnsSale;
