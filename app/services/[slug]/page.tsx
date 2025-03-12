import { services } from "@/arr";
import { Topic } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const Service = async ({ params }: Props) => {
  const topicData: Topic | undefined = await services.find(
    (slug) => slug.id === params.slug
  );

  if (!topicData) {
    return <div>Topic not found!</div>;
  }

  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${topicData.image})`,
        }}
        className={` h-screen bg-no-repeat bg-cover relative pt-[120px] `}
      >
        <div className="absolute inset-0 bg-black/30 "></div>
        <div className="relative z-10 flex flex-col container-custom justify-center gap-4 pointer-events-auto">
          <h1 className="text-[28px] md:text-5xl text-center xl:text-left lg:text-6xl text-white font-bold max-w-[952px] leading-[1.3]">
            {topicData.title}
          </h1>
        </div>
      </section>
      <section className="container-custom py-10">
        {topicData.sections.map((section) => (
          <div key={section.id} className="mb-8">
            {/* Section Title with Icon */}
            <div className="flex items-center space-x-4 mb-4">
              {/* {section.icon && (
              <section.icon className="text-2xl text-blue-600" /> // Render icon
            )} */}
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>

            {section.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            {section.subsections && (
              <div className="pl-4">
                {section.subsections.map((subsection) => (
                  <div key={subsection.id} className="mb-4">
                    <h3 className="text-xl font-medium mb-2">
                      {subsection.title}
                    </h3>
                    <p className="mb-4">{subsection.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Service;
