import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const Experience = () => {
  const internshipDetails = {
    role: "Front-End Development Intern",
    company: "Codveda Technologies",
    location: "Remote",
    duration: "June 2026 – Present",
    milestones: [
      "Architected and deployed 'Stellaris', a monolithic production-ready Space Explorer Terminal solving 3 progressive internship levels.",
      "Engineered dynamic user interfaces utilizing React.js and TypeScript, prioritizing state persistence and modular component design.",
      "Integrated NASA REST APIs to stream live spatial imagery and handled complex asynchronous error states gracefully.",
      "Optimized performance using Google Lighthouse audits, compressing asset payloads and creating customized WebGL boundaries to maximize frames-per-second."
    ]
  };

  return (
    <motion.section 
      id="experience" 
      className="py-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-500">My professional journey and internship milestones.</p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:border-accent/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Briefcase className="text-accent w-6 h-6" /> {internshipDetails.role}
              </h3>
              <p className="text-lg text-accent font-medium mt-1">{internshipDetails.company}</p>
            </div>
            <div className="flex flex-col text-sm text-gray-400 gap-1 md:items-end">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {internshipDetails.duration}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {internshipDetails.location}</span>
            </div>
          </div>

          <ul className="space-y-4 text-gray-300 list-none pl-0">
            {internshipDetails.milestones.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;