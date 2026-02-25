import { motion } from 'framer-motion';
import { Download, Code2, Database, Rocket, Target } from 'lucide-react';
import { me } from '../data/config';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.5em] mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            Personal Journey
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              I am <span className="font-bold text-white italic">{me.name}</span>, a dedicated and growth-driven 
              <span className="text-white"> Frontend Web Developer</span> passionate about building modern, responsive, and user-friendly web applications.
            </p>
            
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 space-y-4 hover:border-cyan-500/30 transition-colors duration-500">
              <div className="flex items-center gap-3 text-cyan-400 font-black uppercase tracking-widest text-sm">
                <Target size={22} strokeWidth={3} />
                <h3>Current Focus: Frontend</h3>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                My primary focus is frontend development, where I specialize in building interactive and visually appealing 
                user interfaces using <span className="text-indigo-400 font-medium">React.js</span>, <span className="text-pink-400 font-medium">TypeScript</span>, and <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href={me.cvLink} 
                download="Natenael_Temesgen_CV.pdf"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black overflow-hidden hover:scale-105 transition-all"
              >
                <Download size={22} strokeWidth={3} /> 
                <span>DOWNLOAD CV</span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative pl-10 border-l border-white/10 space-y-12">
              
              <div className="relative">
                <div className="absolute -left-13.25 top-0 bg-linear-to-br from-cyan-400 to-indigo-600 p-3 rounded-2xl text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  <Rocket size={20} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">🚀 Future Goal: Full-Stack</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  Strategically planning to expand into backend development to design, develop, and deploy 
                  complete web systems independently.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black uppercase tracking-tighter">
                    <Code2 size={24} className="text-cyan-400" />
                    <h4>Backend & APIs</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Node.js & Express.js</li>
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> RESTful API Design</li>
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> JWT Authentication</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black uppercase tracking-tighter">
                    <Database size={24} className="text-pink-500" />
                    <h4>Databases</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> MongoDB & PostgreSQL</li>
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Vercel & Render</li>
                    <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> CI/CD Basics</li>
                  </ul>
                </div>
              </div>

              <div className="relative group overflow-hidden bg-linear-to-br from-indigo-600 to-violet-800 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-900/20">
                <h4 className="text-xl font-black mb-3 flex items-center gap-3">
                  🌱 Mindset & Growth
                </h4>
                <p className="text-sm opacity-80 leading-relaxed font-medium">
                  I believe in continuous learning and building real-world projects. My long-term goal is to 
                  transform complex ideas into impactful digital solutions.
                </p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;