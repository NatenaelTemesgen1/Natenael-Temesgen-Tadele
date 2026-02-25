import { motion } from 'framer-motion';
import type { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0b0f1a] rounded-4xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500"
    >
      <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-[2.1rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

      <div className="relative h-52 overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f1a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 text-cyan-400 text-[9px] font-black rounded-full uppercase tracking-widest border border-white/5 group-hover:border-cyan-500/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black text-white mb-2 tracking-tighter group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2 mb-6">
          {project.description}
        </p>

        {/* --- FR-8: GitHub and Live Demo Links --- */}
        <div className="flex items-center gap-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black text-slate-300 hover:text-cyan-400 tracking-[0.2em] uppercase transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>

          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black text-indigo-400 hover:text-cyan-400 tracking-[0.2em] uppercase transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
