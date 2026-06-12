import { motion } from 'framer-motion';
import { Download, Code2, Database, Rocket, Target } from 'lucide-react';
import { me } from '../data/config';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">💻 About Me</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: The Story & CV */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              I am <span className="font-bold text-slate-900">{me.name}</span>, a dedicated and growth-driven 
              Frontend Web Developer passionate about building modern, responsive, and user-friendly web applications.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-blue-600 font-bold">
                <Target size={20} />
                <h3>Current Focus: Frontend Engineering</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                I specialize in building modern, responsive, and accessible web applications using React, Next.js, 
                TypeScript, Tailwind CSS, and modern JavaScript. My focus is on creating intuitive user experiences, 
                writing clean and maintainable code, optimizing performance, and translating designs into scalable 
                interfaces that meet both user and business needs.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                I continuously refine my frontend development skills by studying industry best practices, improving 
                application architecture, and staying up to date with modern web technologies and development workflows.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href={me.cvLink} 
                download="Natenael_Temesgen_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-slate-200"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: The Roadmap */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative pl-8 border-l-2 border-blue-200 space-y-10">
              
              {/* Future Goal Section */}
              <div className="relative">
                <div className="absolute -left-10 top-0 bg-blue-600 p-2 rounded-full text-white">
                  <Rocket size={16} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">🚀 Future Goal: Full-Stack Software Engineer & Quality-Focused Developer</h3>
                <p className="text-slate-600 text-sm">
                  My long-term goal is to become a well-rounded software engineer capable of building, testing, deploying, 
                  and maintaining complete software solutions. Alongside frontend expertise, I am actively expanding my 
                  knowledge in backend development with NestJS, API design, authentication systems, database management, 
                  cloud platforms, DevOps practices, CI/CD pipelines, and software architecture.
                </p>
              </div>

              {/* Backend Roadmap */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Code2 size={18} className="text-blue-600" />
                    <h4>Backend & APIs</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                    <li>NestJS & API Design</li>
                    <li>Authentication Systems</li>
                    <li>Software Architecture</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Database size={18} className="text-blue-600" />
                    <h4>QA, DevOps & Cloud</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                    <li>Automated Testing & QA</li>
                    <li>Cloud Platforms & CI/CD</li>
                    <li>Software Reliability</li>
                  </ul>
                </div>
              </div>

              {/* Mindset */}
              <div className="bg-blue-600 p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-2 flex items-center gap-2">🌱 Mindset & Growth</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  I believe exceptional software is built through continuous learning, curiosity, and attention to detail. 
                  Every challenge is an opportunity to improve, every project is a chance to grow, and every line of code 
                  is a step toward mastery. I am committed to developing solutions that combine technical excellence, great 
                  user experience, and long-term business value while continuously evolving as a software engineer.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
