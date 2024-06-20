import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Informations from "@/components/home/Informations";
import OnsSale from "@/components/home/OnsSale";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <OnsSale />
      <Informations />
    </div>
  );
};

export default page;
