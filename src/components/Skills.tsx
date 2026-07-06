import { motion } from 'framer-motion';
import { skillCategoryGroups } from '../data/techIcons';
import { Code2, Server, Database, Shield, Cloud, TestTube } from 'lucide-react';
import { TechIconWithFallback } from './ui/TechIcon';

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Authentication: Shield,
  'Cloud & DevOps': Cloud,
  'Testing & QA': TestTube,
};

const categoryColors = {
  Frontend: 'text-cyan-400 light:text-cyan-600',
  Backend: 'text-pink-500 light:text-pink-600',
  Database: 'text-indigo-400 light:text-indigo-600',
  Authentication: 'text-emerald-400 light:text-emerald-600',
  'Cloud & DevOps': 'text-purple-400 light:text-purple-600',
  'Testing & QA': 'text-amber-400 light:text-amber-600',
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900 px-4 overflow-hidden light:bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 light:text-cyan-600"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter light:text-slate-900">
            Skills <span className="text-gradient">&</span> Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategoryGroups.map((group, index) => {
            const Icon = categoryIcons[group.label];
            const color = categoryColors[group.label];

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0b0f1a] p-6 md:p-8 rounded-3xl border border-white/5 light:bg-white light:border-slate-200 light:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className={color} />
                  <h3 className="text-white font-black uppercase tracking-widest text-xs md:text-sm light:text-slate-900">
                    {group.label}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center text-center p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 transition-all light:bg-slate-50 light:border-slate-200 light:hover:border-cyan-400"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                        <TechIconWithFallback
                          name={item.name}
                          devicon={item.devicon}
                          simpleIcon={item.simpleIcon}
                          size={40}
                        />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 group-hover:text-white leading-tight line-clamp-2 light:text-slate-600 light:group-hover:text-slate-900">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
