import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <section className="lg:bg-blue-950 lg:h-full">
        <NavBar />
        <Hero />
        <div className="grid grid-cols-1lg:w-full lg:grid lg:grid-cols-3 lg:justify-center lg:items-center container mx-auto lg:py-5 gap-y-6">
          {data.map((item, index) => (
            <ProjectCard
              src={item.image}
              title={item.title}
              description={item.description}
              className={item.className}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const data = [
  {
    image:
      "/screencapture-127-0-0-1-5501-src-index-html-2025-03-10-23_07_57.png",
    title: "Ferarri",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae officia natus ullam laudantium nisi? Quod iusto labore
          sequi nisi amet dignissimos id reprehenderit, voluptate, quos libero,
          sunt quasi alias!`,
  },
  {
    image:
      "/screencapture-127-0-0-1-5501-src-index-html-2025-03-10-23_07_57.png",
    title: "Lambo",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae officia natus ullam laudantium nisi? Quod iusto labore
          sequi nisi amet dignissimos id reprehenderit, voluptate, quos libero,
          sunt quasi alias!`,
  },
  {
    image:
      "/screencapture-127-0-0-1-5501-src-index-html-2025-03-10-23_07_57.png",
    title: "Porshe",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae officia natus ullam laudantium nisi? Quod iusto labore
          sequi nisi amet dignissimos id reprehenderit, voluptate, quos libero,
          sunt quasi alias!`,
    className: "!bg-red-900",
  },
  {
    image:
      "/screencapture-127-0-0-1-5501-src-index-html-2025-03-10-23_07_57.png",
    title: "Ferarri",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae officia natus ullam laudantium nisi? Quod iusto labore
          sequi nisi amet dignissimos id reprehenderit, voluptate, quos libero,
          sunt quasi alias!`,
  },
  {
    image:
      "/screencapture-127-0-0-1-5501-src-index-html-2025-03-10-23_07_57.png",
    title: "Ferarri",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae officia natus ullam laudantium nisi? Quod iusto labore
          sequi nisi amet dignissimos id reprehenderit, voluptate, quos libero,
          sunt quasi alias!`,
  },
];
