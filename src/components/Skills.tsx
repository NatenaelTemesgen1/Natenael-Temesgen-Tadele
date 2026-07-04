import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Server,
  Database,
  Shield,
  Cloud,
  TestTube,
} from 'lucide-react';

const categoryConfig = [
  { key: 'frontend' as const, label: 'Frontend', icon: Code2, color: 'text-cyan-400' },
  { key: 'backend' as const, label: 'Backend', icon: Server, color: 'text-pink-500' },
  { key: 'database' as const, label: 'Database', icon: Database, color: 'text-indigo-400' },
  { key: 'authentication' as const, label: 'Authentication', icon: Shield, color: 'text-emerald-400' },
  { key: 'cloudDevOps' as const, label: 'Cloud & DevOps', icon: Cloud, color: 'text-purple-400' },
  { key: 'testingQA' as const, label: 'Testing & QA', icon: TestTube, color: 'text-amber-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            Skills <span className="text-gradient">&</span> Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryConfig.map(({ key, label, icon: Icon, color }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0b0f1a] p-6 md:p-8 rounded-3xl border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon size={20} className={color} />
                <h3 className="text-white font-black uppercase tracking-widest text-xs md:text-sm">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategories[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 text-slate-400 rounded-full text-[10px] md:text-xs font-bold border border-white/5 hover:border-cyan-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
