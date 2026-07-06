import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { me } from '../data/config';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 px-4 overflow-hidden light:bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <motion.p className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] light:text-cyan-600 light:drop-shadow-none">
            Portfolio
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter light:text-slate-900">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 border-l-4 border-indigo-500 p-6 md:p-8 rounded-3xl mb-12 max-w-4xl backdrop-blur-md light:bg-white light:border-l-indigo-500 light:border light:border-slate-200 light:shadow-sm"
        >
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light light:text-slate-600">
            A collection of full-stack applications, enterprise contributions, and academic projects
            built with modern technologies and production-ready architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-[10px] tracking-widest uppercase font-bold">
            Explore the lab on{' '}
            <a
              href={me.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-cyan-400 transition-colors border-b border-cyan-400/30 pb-1 light:text-slate-900 light:hover:text-cyan-600"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
