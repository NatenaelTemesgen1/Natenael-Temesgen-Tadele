import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Server, Laptop } from 'lucide-react';

const Skills = () => {
  return (
    // Changed bg to the specific hex to match your theme perfectly
    <section id="skills" className="py-16 md:py-24 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            Expertise <span className="text-gradient">&</span> Skills
          </h2>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on lg screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
          
          {/* FRONTEND COLUMN */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-3 mb-4">
              <Code2 size={20} className="text-cyan-400" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs md:text-sm">Frontend</h3>
            </div>

            <div className="space-y-8 md:space-y-10">
              {skillCategories.frontend.map((skill) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black text-cyan-400/50 uppercase tracking-tighter">
                      Level: {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-0.5 w-full bg-white/10 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "anticipate" }}
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 to-indigo-500"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] group-hover:scale-150 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND COLUMN */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-3 mb-4">
              <Server size={20} className="text-pink-500" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs md:text-sm">Backend</h3>
            </div>

            <div className="space-y-8 md:space-y-10">
              {skillCategories.backend.map((skill) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black text-pink-500/50 uppercase tracking-tighter">
                      Level: {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-0.5 w-full bg-white/10 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "anticipate" }}
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-pink-500 to-purple-600"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(236,72,153,1)] group-hover:scale-150 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INFRASTRUCTURE - Responsive Flex Wrap */}
          <div className="lg:col-span-2 pt-6 md:pt-10">
             <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-white/5 pb-4">
              <Laptop size={20} className="text-indigo-400" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs md:text-sm">Infrastructure & Workflow</h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
                {skillCategories.infrastructure.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-4 md:px-6 py-2 bg-[#0b0f1a] text-slate-400 rounded-full text-[10px] md:text-xs font-bold border border-white/5 hover:border-cyan-500/50 hover:text-white transition-all"
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;