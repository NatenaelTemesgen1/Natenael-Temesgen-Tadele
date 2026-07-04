import { motion } from 'framer-motion';
import { Download, Rocket, Target, Sprout } from 'lucide-react';
import { me } from '../data/config';

const currentFocusTech = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'Prisma ORM',
  'Redis',
  'Socket.IO',
  'REST APIs',
  'Authentication & Authorization',
  'AWS Deployment',
  'Performance Optimization',
];

const futureGoals = [
  'Cloud Computing (AWS)',
  'Docker',
  'CI/CD',
  'System Design',
  'Software Architecture',
  'Automated Testing',
  'Quality Assurance',
  'Distributed Systems',
  'Microservices',
  'DevOps',
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm <span className="font-bold text-white">{me.name}</span>, a Full-Stack Software Developer
                passionate about building production-ready web applications that solve real business problems.
              </p>
              <p>
                I specialize in modern JavaScript and TypeScript ecosystems, developing scalable frontend interfaces
                with React and Next.js while building secure backend services using NestJS, Express.js, and PostgreSQL.
              </p>
              <p>
                During my internship at IE Networks Solutions, I've been contributing to enterprise software by
                implementing real-world features, improving user experience, integrating REST APIs, and working within
                Agile development workflows.
              </p>
              <p>
                I enjoy writing clean, maintainable code, learning new technologies, and continuously improving both
                my technical and problem-solving skills.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={me.cvLink}
                download="Natenael_Temesgen_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 transition-all"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Current Focus */}
            <div className="bg-[#0b0f1a] p-6 md:p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 text-cyan-400 font-black mb-4">
                <Rocket size={20} />
                <h3 className="uppercase tracking-widest text-sm">Current Focus</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Currently I'm focused on building production-grade full-stack applications using:
              </p>
              <div className="flex flex-wrap gap-2">
                {currentFocusTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-full border border-white/5 hover:border-cyan-500/50 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                My goal is to create software that is scalable, secure, maintainable, and enjoyable to use.
              </p>
            </div>

            {/* Future Goals */}
            <div className="bg-[#0b0f1a] p-6 md:p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 text-indigo-400 font-black mb-4">
                <Target size={20} />
                <h3 className="uppercase tracking-widest text-sm">Future Goal</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I aim to become a highly skilled Software Engineer capable of designing complete software systems
                from planning to deployment. I'm actively expanding my knowledge in:
              </p>
              <div className="flex flex-wrap gap-2">
                {futureGoals.map((goal) => (
                  <span
                    key={goal}
                    className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-full border border-white/5 hover:border-indigo-500/50 hover:text-white transition-all"
                  >
                    {goal}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                I believe great software is built through continuous learning, collaboration, and attention to detail.
              </p>
            </div>

            {/* Mindset */}
            <div className="bg-linear-to-r from-cyan-600/20 to-indigo-600/20 p-6 md:p-8 rounded-3xl border border-cyan-500/20">
              <div className="flex items-center gap-3 text-cyan-400 font-black mb-4">
                <Sprout size={20} />
                <h3 className="uppercase tracking-widest text-sm">Mindset</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                I enjoy solving complex problems and turning ideas into reliable software. Every project is an
                opportunity to improve my engineering skills, write cleaner code, and build systems that create real
                value for users.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                I'm committed to lifelong learning and continuously exploring better ways to build modern applications.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
