import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
// Assets Imports
import bestProject from "./assets/Best-Project.png";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";
import dandrah from "./assets/Dandrah.png";
import Front from "./assets/Developing-Front-End-Apps-with-React.png";
import ePlantShopping from "./assets/E-PlantShopping.png";
import gitGithub from "./assets/git-githup.png";
import introToHtmlCssJs from "./assets/intro-to-HTML-CSS-JS.png";
import janeDoe from "./assets/Jane-Doe.png";
import mee from "./assets/MEE.png";
import moxxApp from "./assets/NewMoxxAPP.png";
import Stelliar from "./assets/stellair.png";
import InstaClone from "./assets/InstaClone.png";

import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Globe,
  Palette,
  Facebook,
  Instagram,
} from "lucide-react";

// --- Types ---
interface Project {
  title: string;
  desc: string;
  fullDesc: string;
  tech: string[];
  link: string;
  image: string;
}

interface Certificate {
  title: string;
  issuer: string;
  link: string;
  image: string;
}

// --- Data ---
const PROJECTS: Project[] = [
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

const CERTIFICATES: Certificate[] = [
  {
    title: "Advanced Front-End Using React",
    issuer: "Dandara Al Ebdaa",
    link: "https://dandara-alebdaa.com/verify-certificate/CERT-MLWD33EW-6TK76N",
    image: dandrah,
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/W6KRZQFJRH6K",
    image: Front,
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/S8WYF44Q7WEV",
    image: certificate1,
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/KCV10OTL6FK9",
    image: certificate2,
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/records/IATGDK20DXFP",
    image: gitGithub,
  },
  {
    title: "Introduction to HTML, CSS, and JavaScript",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/A6CLFJ48BRSA",
    image: introToHtmlCssJs,
  },
];

const SKILLS = [
  {
    name: "React",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 841.9 595.3"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g>
          <circle cx="420.9" cy="296.5" r="45.7" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="34">
            <ellipse
              rx="300"
              ry="100"
              cx="420.9"
              cy="296.5"
              transform="rotate(0 420.9 296.5)"
            />
            <ellipse
              rx="300"
              ry="100"
              cx="420.9"
              cy="296.5"
              transform="rotate(60 420.9 296.5)"
            />
            <ellipse
              rx="300"
              ry="100"
              cx="420.9"
              cy="296.5"
              transform="rotate(120 420.9 296.5)"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path
          d="M93.6 102.6c-1.9 3.4-7.3 6.1-13.7 4.7-4.1-.9-6.7-3.6-7.9-6.1l6.9-3.9c.8 1.6 2.9 3.2 5.8 3.2 2.4 0 4-.9 4.9-2.9.9-2.3.4-4 -3.4-5.8-3.6-1.8-9.8-3.9-9.8-10.8 0-6.4 4.9-11.3 12.6-12.6 5.5-1 9.4-.3 12.9 2.3l-6.8 4.1c-1.5-1-3.2-1.4-6-1.4-2.7 0-4.4 1.1-5.1 2.9-.7 1.9-.4 3.9 3.3 5.8 6 2.8 10 4.9 10 11.1 0 7-5.5 11.3-12.9 12.6z"
          fill="#000"
        />
        <path
          d="M58.1 103c-2.9 0-4.7-1.4-5.6-3.1l6.7-3.9c.6 1 1.7 1.8 3.3 1.8 1.5 0 2.4-.7 2.4-3.4V58.1h8.5v36.1c0 8.7-5.1 12.8-14.3 12.8z"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12c4.67 0 7.33-4 12-4 2.67 0 4 1.5 4 1.5S18.33 12 14 12c-6 0-9-4-12-4z"
          fill="#06B6D4"
        />
        <path
          d="M2 18c4.67 0 7.33-4 12-4 2.67 0 4 1.5 4 1.5S18.33 18 14 18c-6 0-9-4-12-4z"
          fill="#7C3AED"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.06 7.57 10.52.55.1.75-.24.75-.53v-1.86c-3.08.67-3.73-1.4-3.73-1.4-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13.88-.25 1.82-.38 2.76-.38.94 0 1.88.13 2.76.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.78 1.13 1.77 1.13 2.98 0 4.25-2.6 5.19-5.07 5.46.39.34.74 1.02.74 2.06v3.05c0 .29.2.64.76.53 4.4-1.46 7.57-5.62 7.57-10.52C23.25 5.48 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#E44D26" d="M19 3l9 102 35 10 35-10 9-102H19z" />
        <path fill="#F16529" d="M64 116l28-8 7-78H64v86z" />
        <path
          fill="#EBEBEB"
          d="M64 54h14l1-11H64V32h30l-1 11H64v11zM64 86v-11h-18l-1 11v12l19 5v-17h0z"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#1572B6" d="M19 3l9 102 35 10 35-10 9-102H19z" />
        <path fill="#33A9DC" d="M64 116V32h31l-1 11H64v73l0 0z" />
        <path
          fill="#EBEBEB"
          d="M64 70h18l1-11H64V54h29l-1 11H64v11zM64 98v-11h-18l-1 11v12l19 5v-17z"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M12 2c-2.21 0-4 1.79-4 4v1h8V6c0-2.21-1.79-4-4-4z"
          fill="#3776AB"
        />
        <path
          d="M6 8v2c0 2.21 1.79 4 4 4h4v-2c0-2.21-1.79-4-4-4H6z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2s7 2 7 5-7 6-7 6-7-3-7-6 7-5 7-5z" fill="#5382A1" />
        <path d="M16 13s9 0 9 4-9 7-9 7-9-4-9-7 9-4 9-4z" fill="#D24726" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2C6.5 2 2.05 6.45 2.05 12c0 2.11.55 4.07 1.6 5.83L2 22l4.36-1.42C8 21.39 10 22 12.04 22 17.58 22 22.03 17.55 22.03 12 22.03 6.45 17.58 2 12.04 2zM16.6 14.7c-.26.73-1.49 1.4-2.05 1.49-.53.09-1.24.13-3.15-.62-2.77-1.05-4.58-3.78-4.72-3.98-.14-.2-1.15-1.66-1.15-3.18 0-1.52.72-2.26.97-2.56.25-.3.6-.36.8-.36.2 0 .44 0 .67 0 .22 0 .52-.07.79.53.26.6.88 1.98.95 2.12.07.14.11.3.03.49-.09.19-.13.3-.25.48-.12.18-.26.39-.37.53-.12.14-.24.3-.11.59.13.29.57.96 1.23 1.55.85.74 1.57.95 1.87 1.07.3.12.48.1.66-.06.18-.16.74-.86.95-1.16.21-.29.44-.24.73-.14.29.1 1.86.88 2.18 1.04.32.16.53.24.48.39-.04.15-.22.48-.48 1.21z" />
      </svg>
    ),
    link: "https://wa.me/201150220510",
    label: "WhatsApp",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/abdallah-m-farouk-8959b1300/",
    label: "LinkedIn",
  },
  {
    icon: <Github />,
    link: "https://github.com/abdallahfarouk959-star",
    label: "GitHub",
  },
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/abdallah.farouk.35110/",
    label: "Facebook",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/abdallah_farouk_7/",
    label: "Instagram",
  },
];

// --- Components (moved to separate files) ---
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from './components/Experience';

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />

      <Hero image={mee} />
      <About />

      <Skills skills={SKILLS} />

      <Certificates certificates={CERTIFICATES} />
      
      <Experience />

      <Projects projects={PROJECTS} />

      <Contact socials={SOCIALS} />

      <Footer />
    </div>
  );
}
