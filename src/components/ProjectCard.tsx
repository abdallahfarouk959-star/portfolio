import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full hover:bg-accent hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex gap-2">
            {project.tech.slice(0, 2).map(t => (
              <span key={t} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-accent text-xs font-bold flex items-center gap-1 hover:underline"
        >
          {showDetails ? 'LESS INFO' : 'MORE INFO'}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-sm text-gray-300 border-t border-white/5 mt-4">
                {project.fullDesc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
