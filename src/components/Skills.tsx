import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Server, Laptop } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 px-4 overflow-hidden"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Expertise <span className="text-gradient">&</span> Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
          
          {/* FRONTEND COLUMN */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-4">
              <Code2 size={20} className="text-cyan-400" />
              <h3 className="text-white font-black uppercase tracking-widest text-sm">Frontend</h3>
            </div>

            <div className="space-y-10">
              {skillCategories.frontend.map((skill) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-black text-cyan-400/50 uppercase tracking-tighter">
                      Level: {skill.level}%
                    </span>
                  </div>
                  
                  {/* Minimalist Glow Track */}
                  <div className="relative h-0.5 w-full bg-white/10 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "anticipate" }}
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 to-indigo-500"
                    >
                      {/* The Glow Point (The "Pulse") */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] group-hover:scale-150 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND COLUMN */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-4">
              <Server size={20} className="text-pink-500" />
              <h3 className="text-white font-black uppercase tracking-widest text-sm">Backend</h3>
            </div>

            <div className="space-y-10">
              {skillCategories.backend.map((skill) => (
                <div key={skill.name} className="relative group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-black text-pink-500/50 uppercase tracking-tighter">
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

          {/* TOOLS & TAGS (Ditched the big box for a clean flex layout) */}
          <div className="lg:col-span-2 pt-10">
             <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Laptop size={20} className="text-indigo-400" />
              <h3 className="text-white font-black uppercase tracking-widest text-sm">Infrastructure & Workflow</h3>
            </div>
            <div className="flex flex-wrap gap-4">
                {skillCategories.infrastructure.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-6 py-2 bg-[#0b0f1a] text-slate-400 rounded-full text-xs font-bold border border-white/5 hover:border-cyan-500/50 hover:text-white transition-all"
                  >
                    {tool}
                  </span>
                ))}
                {['Git', 'Vite', 'VS Code', 'Agile'].map((extra) => (
                   <span key={extra} className="px-6 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-black uppercase tracking-tighter border border-indigo-500/20">
                    {extra}
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