import Image from "next/image";
import React from "react";

const Hadajcom = () => {
  return (
    <section className="bg-grey">
      <div className="container-custom py-[50px] flex flex-col md:flex-row justify-between  gap-8">
        <div className="flex flex-col max-w-[600px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            We at Hadajcom
          </h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quasi non quibusdam quos cum amet quod optio accusamus nam doloribus
            quis tempore consequatur iusto, facere laboriosam nulla eos
            perspiciatis sed vero architecto voluptatibus laudantium? Sit
            doloribus esse ea ex, autem tenetur adipisci dicta dolor delectus
            exercitationem optio animi quo cum facilis placeat! Sapiente ab
            cupiditate, commodi adipisci veritatis dolor! Dolorem possimus
            facere repellendus qui voluptatibus commodi dolores, quos expedita
            sint. Rem ducimus porro aperiam accusamus labore accusantium
            praesentium eius beatae.
          </p>
        </div>
        <div className="relative w-full md:w-[403px] h-[405px]">
          <Image
            src="/images/man-on-roof.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Man working on a roof"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hadajcom;
