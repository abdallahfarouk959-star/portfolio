import { motion } from 'motion/react';
import { ChevronRight, Download } from 'lucide-react';

const Hero = ({ image }: { image: string }) => (
  <section id="hero" className="min-h-screen flex items-center pt-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-accent font-semibold tracking-widest mb-4">FULL-STACK DEVELOPER</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <br />
          <span className="text-gradient">Abdallah Farouk</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          Full-Stack Developer crafting scalable web applications, interactive 3D experiences, and clean digital solutions. Focused on performance, modern architecture, and exceptional user experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-accent hover:bg-red-600 px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2"
          >
            View Projects <ChevronRight size={18} />
          </a>
          <a
            href="/Abdallah_Mohamed_Farouk_Resume.pdf"
            download="Abdallah_Mohamed_Farouk_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 text-white"
          >
            Resume <Download size={18} />
          </a>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-accent/20 p-4">
          <div className="w-full h-full rounded-full overflow-hidden bg-accent/10">
            <img
              src={image}
              alt="Abdallah"
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
