import { services } from "@/arr";
import { Topic } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  service: Topic;
}

const ServiceCard = ({ service }: CardProps) => {
  const { Icon, image, id, title } = service; // Add a `description` field to your data

  return (
    <Link
      href={`/services/${id}`}
      className="relative group overflow-hidden rounded-lg"
    >
      {/* Image Container */}
      <div className="relative block h-[300px] md:h-[400px] w-auto">
        <Image
          src={image}
          alt={`Service: ${id}`}
          className="rounded-lg w-full h-full object-cover"
          width={361}
          height={400}
          priority={id === "critical-service"} // Only prioritize critical images
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>

      {/* Bottom Blue Overlay */}
      <div className="absolute bottom-0 bg-darkblue/40 w-full py-2 rounded-b-lg group-hover:h-full group-hover:py-4 transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center h-full">
          {/* Default Content (Icon + Title) */}
          <div className="group-hover:hidden flex items-center">
            {Icon ? (
              <Icon size={36} color="#CADCFC" aria-label={id} />
            ) : (
              <span>No Icon</span> // Fallback for missing icon
            )}
            <span className="uppercase text-[26px] leading-5 font-semibold text-white ml-2">
              {id.replaceAll("-", " ")}
            </span>
          </div>

          {/* Hover Content (Description) */}
          <div className="hidden group-hover:flex items-center flex-col justify-center p-4">
            <div className="flex items-center">
              {Icon ? (
                <Icon size={36} color="#CADCFC" aria-label={id} />
              ) : (
                <span>No Icon</span> // Fallback for missing icon
              )}
              <span className="uppercase text-[26px] leading-5 font-semibold text-white ml-2">
                {id.replaceAll("-", " ")}
              </span>
            </div>
            <p className="text-white text-center text-lg">
              {title} {/* Display the description text on hover */}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <section className="container-custom py-[50px]">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="uppercase text-[40px] leading-[18px] font-semibold">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-11">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
