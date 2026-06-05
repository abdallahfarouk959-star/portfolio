import { motion } from 'motion/react';

const About = () => (
  <section id="about" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-accent"></span>
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a Junior Front-End Developer with a strong foundation in building responsive and user-friendly web interfaces. 
            I focus on writing clean, efficient code and transforming design concepts into functional digital experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            While I am at the early stages of my professional journey, I am deeply committed to following industry best practices and modern web standards.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-8 rounded-2xl text-center">
            <h4 className="text-4xl font-bold text-accent mb-2">1st</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Year CS Student</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <h4 className="text-4xl font-bold text-accent mb-2">6+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Live Projects</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center col-span-2">
            <h4 className="text-4xl font-bold text-accent mb-2">7+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Professional Certificates</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
