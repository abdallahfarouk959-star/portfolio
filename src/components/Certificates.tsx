import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, X } from 'lucide-react';
import { Certificate } from '../types';

const Certificates = ({ certificates }: { certificates: Certificate[] }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Education Block */}
          <div className="md:col-span-1 lg:col-span-1 md:row-span-3">
            <h2 className="text-3xl font-bold mb-8">Education & Learning</h2>
            <div className="glass-card p-8 rounded-2xl">
              <GraduationCap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
              <p className="text-gray-400 text-sm mb-4">Computer Science and Information</p>
              <a href="https://www.eelu.edu.eg/" target="_blank" rel="noopener noreferrer" aria-label="Visit EELU University" className="text-accent font-bold hover:underline">EELU University</a>
            </div>
          </div>
          
          {/* Certificates Title */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-accent" /> Professional Certificates
            </h3>
          </div>

          {/* Certificates Cards */}
          {certificates.map((cert, i) => (
            <motion.div 
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              aria-label={`View ${cert.title} certificate`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 rounded-xl flex gap-4 items-center hover:bg-white/10 transition-all group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight mb-1">{cert.title}</h4>
                <p className="text-xs text-gray-500">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-right-12 md:-top-12 text-white/70 hover:text-white transition-colors p-2 bg-black/50 hover:bg-black/80 rounded-full md:bg-transparent md:hover:bg-transparent"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-auto h-auto max-w-full max-h-[75vh] md:max-h-[85vh] rounded-lg object-contain shadow-2xl"
              />
              
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
                <p className="text-accent">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
