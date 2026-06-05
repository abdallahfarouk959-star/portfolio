import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  link: string;
  image: string;
}

const Certificates = ({ certificates }: { certificates: Certificate[] }) => {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-8">Education & Learning</h2>
            <div className="glass-card p-8 rounded-2xl mb-6">
              <GraduationCap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
              <p className="text-gray-400 text-sm mb-4">Computer Science and Information (1st Year)</p>
              <a href="https://www.eelu.edu.eg/" target="_blank" className="text-accent font-bold hover:underline">EELU University</a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-accent" /> Professional Certificates
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <motion.a 
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-xl flex gap-4 items-center hover:bg-white/5 transition-all group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight mb-1">{cert.title}</h4>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
