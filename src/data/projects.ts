import { Project } from '../types';
import bestProject from '../assets/Best-Project.png';
import janeDoe from '../assets/Jane-Doe.png';
import ePlantShopping from '../assets/E-PlantShopping.png';
import moxxApp from '../assets/NewMoxxAPP.png';
import Stelliar from '../assets/Stellair.png';
import InstaClone from '../assets/InstaClone.png';

export const PROJECTS: Project[] = [
  {
    title: "Stellaris – Space Command Terminal",
    desc: "A futuristic dynamic Space Command Terminal with fully interactive 3D Solar System.",
    fullDesc:
      "An immersive, production-grade Space Command Terminal that pushes the boundaries of web-based 3D visualization. This application integrates real-time astrophysical data via NASA APIs into a high-performance 3D Solar System built with Three.js and React-Three-Fiber. Engineered with a focus on web performance, it features custom planetary shaders, dynamic orbital mechanics, and a sophisticated WebGL architecture that ensures smooth 60FPS interactivity even during complex scene transitions.",
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
    image: Stelliar,
  },
  {
    title: "Moxx Movie App",
    desc: "A responsive movie streaming platform interface with dynamic data fetching.",
    fullDesc:
      "A feature-rich movie application that allows users to explore trending films and TV shows. It features a responsive layout, dynamic search functionality, and seamless integration with movie APIs to provide real-time updates.",
    tech: ["React", "API Integration", "Tailwind CSS", "Framer Motion"],
    link: "https://movie-app-sigma-navy-81.vercel.app/",
    image: moxxApp,
  },
  {
    title: "InstaClone Full-Stack",
    desc: "A high-performance Instagram clone with real-time features and cloud storage.",
    fullDesc:
      "A complete social media experience featuring Google Authentication, image uploads with progress tracking via Firebase Storage, infinite scrolling, real-time likes/comments, and a fully responsive profile grid.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://insta-clone-gules-phi.vercel.app/",
    image: InstaClone,
  },
  {
    title: "E-Plant Shopping",
    desc: "Specialized e-commerce platform for plant enthusiasts.",
    fullDesc:
      "Paradise Nursery features dynamic product cataloging and a real-time shopping cart system.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://abdallahfarouk959-star.github.io/e-plantShopping/",
    image: ePlantShopping,
  },
  {
    title: "Advanced Portfolio",
    desc: "A fully responsive personal portfolio focusing on clean structure.",
    fullDesc:
      "Represents strong implementation of front-end fundamentals and UI/UX consistency.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://abdallahfarouk959-star.github.io/Your-Name---Portfolio/",
    image: bestProject,
  },
  {
    title: "Jane Doe Portfolio",
    desc: "A responsive personal portfolio website built to showcase skills",
    fullDesc:
      "projects, and personal information. Focused on clean design, basic interactivity, and solid front-end fundamentals.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://abdallahfarouk959-star.github.io/Jane-Doe---Portfolio/",
    image: janeDoe,
  },
];
