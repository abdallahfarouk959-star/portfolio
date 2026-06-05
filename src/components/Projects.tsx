import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const PROJECTS: Project[] = [
  {
    title: "Stellaris – Space Command Terminal",
    desc: "A futuristic dynamic Space Command Terminal with fully interactive 3D Solar System.",
    fullDesc:
      "Successfully completed all 3 levels of Codveda internship challenge. Features a fully navigable 3D Solar System with orbital mechanics, custom planetary shaders, and live NASA API data integration. Heavily optimized using a custom WebGLBoundary to completely eliminate main-thread long tasks.",
    tech: [
      "React.js",
      "TypeScript",
      "Three.js",
      "React-Three-Fiber",
      "Tailwind CSS",
      "Framer Motion",
      "NASA API",
    ],
    link: "https://stellaris-v.vercel.app/",
    image: "src/assets/Stellair.png",
  },
  {
    title: "Moxx App",
    desc: "Modern high-performance cinema & TV show discovery platform.",
    fullDesc:
      "Built with a modular component-based approach in React, featuring trending sections and a cinematic hero slider.",
    tech: ["React", "Tailwind CSS", "React Router"],
    link: "https://movie-app-sigma-navy-81.vercel.app/",
    image: "images/Moxx-App.png",
  },
  {
    title: "E-Plant Shopping",
    desc: "Specialized e-commerce platform for plant enthusiasts.",
    fullDesc:
      "Paradise Nursery features dynamic product cataloging and a real-time shopping cart system.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://abdallahfarouk959-star.github.io/e-plantShopping/",
    image: "images/E-PlantShopping.png",
  },
  {
    title: "Advanced Portfolio",
    desc: "A fully responsive personal portfolio focusing on clean structure.",
    fullDesc:
      "Represents strong implementation of front-end fundamentals and UI/UX consistency.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://abdallahfarouk959-star.github.io/Your-Name---Portfolio/",
    image: "images/Best-Project.png",
  },
  
];
interface Project {
  title: string;
  desc: string;
  fullDesc: string;
  tech: string[];
  link: string;
  image: string;
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-500">
              A selection of my recent front-end projects.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
