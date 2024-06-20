import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
const Informations = () => {
  return (
    <div className="py-4">
      <div className="flex gap-4 justify-center items-center flex-col">
        <div className="text-4xl border-4 border-black p-6 rounded-full ">
          <FaTruckFast />
        </div>
        <p className="font-roboto font-semibold">
          Fastest domicile and stop desk shipping services.
        </p>
        <div className="text-4xl border-4 border-black p-6 rounded-full ">
          <LiaExchangeAltSolid />
        </div>
        <p className="font-roboto font-semibold">
          Return request processing takes 3-5 days.
        </p>
        <div className="text-4xl border-4 border-black p-6 rounded-full ">
          <BsCashCoin />
        </div>
        <p className="font-roboto font-semibold">
          You can pay either by cash on delivery or by BARIDI Mob.
        </p>
      </div>
    </div>
  );
};

export default Informations;
