import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url(/images/hero.jpg)] h-screen bg-no-repeat bg-cover relative pt-[120px] ">
      <div className="absolute inset-0 bg-black/30 "></div>
      <div className="relative z-10 flex flex-col container-custom justify-center gap-4 pointer-events-auto">
        <h1 className="text-[28px] md:text-5xl text-center xl:text-left lg:text-6xl text-white font-bold max-w-[952px] leading-[1.3]">
          Expert Electrical, Solar, CCTV & Fire Alarm Services – Reliable &
          Affordable Solutions
        </h1>
        <h2 className="text-[32px] leading-[28px] text-white font-normal text-center xl:text-left">
          Your Trusted Local Experts for Home & Business Electrical Solutions{" "}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
