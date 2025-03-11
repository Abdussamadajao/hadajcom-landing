import React from "react";

const Project = () => {
  return (
    <section className="container-custom py-[50px]">
      <h1 className="text-[40px] font-semibold text-black uppercase text-center mb-10">
        Recent projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {data.map((project) => (
          <div key={project.id}>
            <div className="bg-grey h-[200px]  flex justify-center items-center text-xl">
              Photo in here
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
export interface IProject {
  id: number;
  category: string;
  image: string;
}
const data: IProject[] = [
  {
    id: 1,
    category: "residential",
    image: "/images/project-1.png",
  },
  {
    id: 2,
    category: "commercial",
    image: "/images/project-2.png",
  },
  {
    id: 3,
    category: "apartment",
    image: "/images/project-3.png",
  },
  {
    id: 4,
    category: "residential",
    image: "/images/project-4.png",
  },
  {
    id: 5,
    category: "apartment",
    image: "/images/project-5.png",
  },
  {
    id: 6,
    category: "residential",
    image: "/images/project-6.png",
  },
  {
    id: 7,
    category: "construction",
    image: "/images/project-7.jpg",
  },
  {
    id: 8,
    category: "construction",
    image: "/images/project-8.jpg",
  },
];
