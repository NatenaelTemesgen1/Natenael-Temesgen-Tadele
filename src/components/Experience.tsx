import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-cyan-500/30 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 bg-cyan-500 p-2 rounded-full text-black">
                <Briefcase size={16} />
              </div>

              <div className="bg-[#0b0f1a] p-6 md:p-8 rounded-3xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-black text-white">{exp.role}</h3>
                  {exp.period && (
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  )}
                </div>
                <p className="text-indigo-400 font-bold text-sm mb-4">{exp.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="text-slate-500 text-sm flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
