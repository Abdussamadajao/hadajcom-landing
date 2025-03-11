import Image from "next/image";
import React from "react";

const Hadajcom = () => {
  return (
    <section className="bg-grey">
      <div className="container-custom py-[50px] flex flex-col lg:flex-row justify-between lg:items-center gap-8">
        {/* Text Section */}
        <div className="flex flex-col ">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            We at Hadajcom
          </h1>
          <p className="text-base lg:text-lg max-w-[600px]">
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

        {/* Image Section */}
        <div className="relative w-full lg:w-[403px] h-[300px] md:h-[405px]">
          <Image
            src="/images/man-on-roof.jpg"
            alt="Man working on a roof"
            fill
            className="rounded-lg object-cover"
            priority
            sizes="(max-width: 403px) 100vw, 403px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hadajcom;
