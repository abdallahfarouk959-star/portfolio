import { motion } from 'motion/react';
import { Social } from '../types';
import { Download } from 'lucide-react';

const Contact = ({ socials }: { socials: Social[] }) => {
  return (
    <section id="contact" className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-black">LET'S BUILD SOMETHING <br /> AMAZING TOGETHER</h2>
        <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto font-medium">
          Currently looking for new opportunities and collaborations. 
          Feel free to reach out through any of these platforms.
        </p>

        <div className="flex justify-center mb-12">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl">
            <Download size={18} /> Download CV
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
