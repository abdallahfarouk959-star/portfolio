import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Data Imports
import { PROJECTS } from "./data/projects";
import { CERTIFICATES } from "./data/certificates";
import { SKILLS } from "./data/skills";
import { SOCIALS } from "./data/socials";

import mee from "./assets/MEE.png";

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
