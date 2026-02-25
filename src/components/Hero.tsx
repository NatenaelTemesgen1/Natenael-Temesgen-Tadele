import { motion } from 'framer-motion';
import { me } from '../data/config';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const displayName = me?.name || "Natenael Temesgen";
  const nameChars = Array.from(displayName);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Text Content */}
        <div className="z-10">
          <div className="mb-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.5em] mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            >
              Building Digital Experiences
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter flex flex-wrap leading-[0.9]">
              {nameChars.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.1,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block cursor-default py-2 text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl border-l-2 border-cyan-500/50 pl-6 font-light leading-relaxed italic"
          >
            {me?.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-10 items-start sm:items-center"
          >
            <div className="flex gap-8 items-center">
              <a href={me?.socials?.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={28} />
              </a>
              <a href={me?.socials?.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={me?.socials?.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Twitter size={28} />
              </a>
            </div>
            
            <a href="#projects" className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black transition-all hover:scale-105">
              <span>EXPLORE WORK</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image with ONLY Color Effect */}
        <div className="relative flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 md:w-96 md:h-96 group"
          >
            {/* Pulsing Colored Glow on Hover */}
            <div className="absolute -inset-4 bg-linear-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
            
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/10 bg-slate-800 shadow-2xl transition-all duration-500 group-hover:border-cyan-400/50">
              <img 
                src="/photo_2026-02-23_23-20-19.jpg" 
                alt="Natenael" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-[opacity,filter] duration-700" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-cyan-900/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;