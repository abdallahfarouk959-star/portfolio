import { motion } from 'motion/react';

interface Skill {
  name: string;
  icon: any;
}

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">Technical Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-accent/50 transition-all"
            >
              <div className="text-accent">{skill.icon}</div>
              <span className="font-bold text-sm tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
