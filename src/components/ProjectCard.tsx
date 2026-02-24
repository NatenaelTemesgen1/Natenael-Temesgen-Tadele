import { motion } from 'framer-motion';
import type { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Reduced rounding from 2.5rem to 2rem for smaller scale
      className="group relative bg-[#0b0f1a] rounded-4xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500"
    >
      <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-[2.1rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

      {/* Reduced height from h-72 to h-52 */}
      <div className="relative h-52 overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f1a] via-transparent to-transparent opacity-80" />
      </div>

      {/* Reduced padding from p-8 to p-6 */}
      <div className="p-6 relative">
        {/* Adjusted margins and text size */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 text-cyan-400 text-[9px] font-black rounded-full uppercase tracking-widest border border-white/5 group-hover:border-cyan-500/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {/* Reduced text size from text-3xl to text-2xl */}
        <h3 className="text-2xl font-black text-white mb-2 tracking-tighter group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">
          {project.description}
        </p>

        {/* Reduced margin-top for the CTA */}
        <div className="mt-5 flex items-center gap-2 text-[9px] font-black text-indigo-400 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          View Project Details →
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;