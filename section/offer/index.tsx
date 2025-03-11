import React from "react";
import { LiaPlugSolid } from "react-icons/lia";
import { MdOutlineElectricMeter } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";

const Offer = () => {
  return (
    <section className="bg-grey">
      <div className="container-custom flex flex-col py-[50px] gap-3">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-[40px] font-semibold text-black uppercase">
            We offer
          </h1>
          <span className="text-[20px] text-dark text-center">
            We offer a comprehensive range of cost effective services for
            residential and commercial properties.
          </span>
        </div>
        <div className="flex items-center gap-6 justify-between">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col gap-4 items-center ">
              <div>
                <offer.Icon size={150} color="#8B8B8B" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 w-[363px]">
                <h2 className="text-[32px] leading-5 text-black">
                  {offer.title}
                </h2>
                <p className="text-center text-xl leading-[30px] text-dark">
                  {offer.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
const offers = [
  {
    Icon: MdOutlineElectricMeter,
    title: "Safety Maintenance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
  },
  {
    Icon: RiLightbulbFlashLine,
    title: "Electrical Installation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
  },
  {
    Icon: LiaPlugSolid,
    title: "Service Maintenance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
  },
];
