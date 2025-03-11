import Image from "next/image";
import React from "react";
import { BsBuildingFill } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
interface servicesRes {
  image: string;
  title: "Residential" | "Commercial";
  Icon: any;
}
const Services = () => {
  const services: servicesRes[] = [
    {
      image: "/images/service-1.jpg",
      title: "Residential",
      Icon: IoIosHome,
    },
    {
      image: "/images/service-2.jpg",
      title: "Commercial",
      Icon: BsBuildingFill,
    },
    {
      image: "/images/service-2.jpg",
      title: "Commercial",
      Icon: BsBuildingFill,
    },
  ];
  return (
    <section className="container-custom py-[50px]">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="uppercase text-[40px] leading-[18px] font-semibold">
          Our Services
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mt-11">
          {services.map(({ Icon, image, title }, index) => (
            <div key={index} className="relative">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] ">
                <Image
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-full object-cover"
                  fill
                  priority
                  sizes="(max-width: 400px) 100vw, 400px"
                />
              </div>

              <div className="absolute bottom-0 bg-darkblue/40 w-full py-2 rounded-b-lg ">
                <div className="flex items-center justify-center ">
                  <Icon size={36} color="#CADCFC" />
                  <span className="uppercase text-[26px] leading-5 font-semibold text-white ml-2">
                    {title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
