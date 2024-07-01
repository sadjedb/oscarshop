import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row h-[250px] border-t-[1px] border-black ">
      <div className="flex md:w-[45%] border-r-[1px] border-black">
        <div className="ml-4 md:ml-36 pt-11">
          <h1 className="font-poetsenOne text-7xl text-black">OSCAR</h1>
          <h1 className="font-poetsenOne text-7xl text-black opacity-40 ml-16">
            SHOP
          </h1>
        </div>
      </div>
      {/* Informations */}
      <div className="flex flex-col md:flex-row w-full justify-center pl-4">
        <div className="w-full text-xl font-Roboto border-r-[1px] border-black">
          <p className="text-xl font-semibold pt-5 pr-4 underline underline-offset-2">
            About Us
          </p>
          <div className="text-lg pr-4">
            <p className="pb-2 pt-4 pr-4">Our Mission</p>
            <p className="pb-2 pr-4">More About Product Quality</p>
            <p className="pb-2 pr-4">Site Map</p>
          </div>
        </div>

        <div className="w-full text-xl font-Roboto">
          <p className="text-xl font-semibold pt-5 pl-4 underline underline-offset-2">
            Help
          </p>
          <div className="text-lg pl-4">
            <p className="pb-2 pt-4">Help Center</p>
            <p className="pb-2">Community Guidelines</p>
            <p className="pb-2">How To Buy From Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
