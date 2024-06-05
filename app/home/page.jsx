import BestSeller from "@/components/home/BestSeller";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Informations from "@/components/home/Informations";
import OnsSale from "@/components/home/OnsSale";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-screen">
        <Hero />
        <Categories />
        <OnsSale />
        <BestSeller />
        <Informations />
      </div>
    </div>
  );
};

export default page;
