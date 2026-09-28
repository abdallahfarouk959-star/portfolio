import { motion } from 'motion/react';

const About = () => (
  <section id="about" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-accent"></span>
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a Full-Stack Developer and Computer Science student focused on building high-performance, responsive web applications. I bridge the gap between design and scalable code, turning complex requirements into seamless, interactive user experiences using React, TypeScript, and modern web standards.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            With hands-on experience spanning interactive 3D interfaces, full-stack integrations, and client projects, I prioritize clean architecture, accessible UI, and performance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-8 rounded-2xl text-center">
            <h4 className="text-4xl font-bold text-accent mb-2">🎓</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CS Student</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center">
            <h4 className="text-4xl font-bold text-accent mb-2">6+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Live Projects</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center col-span-2">
            <h4 className="text-4xl font-bold text-accent mb-2">12+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Professional Certificates</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
