import { motion } from 'motion/react';

interface Social {
  icon: any;
  link: string;
  label: string;
}

const Contact = ({ socials }: { socials: Social[] }) => {
  return (
    <section id="contact" className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-black">LET'S BUILD SOMETHING <br /> AMAZING TOGETHER</h2>
        <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
          Currently looking for new opportunities and collaborations. 
          Feel free to reach out through any of these platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
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
