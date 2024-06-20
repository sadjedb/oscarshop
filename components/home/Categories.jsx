import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      name: "sweatpants",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/swratpants-768x384.jpg.webp",
    },
    {
      name: "shirts",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/shirt-768x768.jpg.webp",
    },
    {
      name: "hoodies",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/hoodies-768x384.jpg.webp",
    },
    {
      name: "T-shirt",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/tshirtcatbanner_resultattshirtcatbanner.jpg-1-768x768.webp",
    },
    {
      name: "Jackets",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/jacketscatbenner_resultatjacketscatbenner.jpg-768x384.webp",
    },
    {
      name: "jeans",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/jeans-768x768.jpg.webp",
    },
    {
      name: "caps",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/caps-768x768.jpg.webp",
    },
    {
      name: "shorts",
      image:
        "https://uptownoire.com/wp-content/uploads/2022/08/shorts_resultatshorts.jpg-e1660397130527-768x385.webp",
    },
  ];
  const CATEGORIES = categories.map((category) => {
    return (
      <a key={category.name} href={`home/${category.name}`}>
        <div className="flex  bg-[#F5F5F5] w-full h-full hover:rounded-xl hover:scale-105 transition-all duration-700 rounded-xl  shadow-lg  hover:shadow-2xl hover:border-black  hover:border-[1px]">
          <img
            src={category.image}
            className="w-full flex justify-start hover:rounded-xl transition-all duration-700 rounded-xl  shadow-lg  hover:shadow-2xl hover:border-black  hover:border-[1px]"
            alt=""
          />
        </div>
      </a>
    );
  });
  return (
    <div className="flex w-full h-screen justify-center ">
      <div className="grid grid-cols-2 grid-rows-4 w-[70%] gap-6 ">
        {CATEGORIES}
      </div>
    </div>
  );
};

export default Categories;
