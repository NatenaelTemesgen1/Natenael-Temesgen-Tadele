
import { motion, useMotionValue, useTransform, type Variants } from 'framer-motion';
import { me } from '../data/config';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const displayName = me?.name || "Natenael Temesgen";
  const nameChars = Array.from(displayName);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-900 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        
        <div className="z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-8"
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.5em] mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            >
              Building Digital Experiences
            </motion.p>
            
            {/* THE NAME: Slide from right + Color Shift + Breathing */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter flex flex-wrap leading-[0.9]">
              {nameChars.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: [1, 1.1, 1],
                    // Multi-color attractive cycle
                    color: ["#6366f1", "#a855f7", "#ec4899", "#6366f1"] 
                  }}
                  transition={{ 
                    x: { type: "spring", damping: 15, stiffness: 100, delay: index * 0.03 },
                    opacity: { duration: 0.5, delay: index * 0.03 },
                    scale: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.1 },
                    color: { repeat: Infinity, duration: 6, ease: "linear" }
                  }}
                  className="inline-block cursor-default py-2"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl border-l-2 border-cyan-500/50 pl-6 font-light leading-relaxed italic"
          >
            {me?.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-10 items-start sm:items-center"
          >
            <div className="flex gap-8 items-center">
              <a href={me?.socials?.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 drop-shadow-lg">
                <Github size={30} strokeWidth={2} />
              </a>
              <a href={me?.socials?.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 hover:scale-125 transition-all duration-300 drop-shadow-lg">
                <Linkedin size={30} strokeWidth={2} />
              </a>
              <a href={me?.socials?.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:scale-125 transition-all duration-300 drop-shadow-lg">
                <Twitter size={30} strokeWidth={2} />
              </a>
            </div>
            
            <a href="#projects" className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">EXPLORE WORK</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={20} strokeWidth={3} />
              <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-end perspective-distant">
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            animate={{ 
                y: [0, -20, 0],
                rotateZ: [-1, 1, -1]
            }}
            transition={{ 
                repeat: Infinity, 
                duration: 5, 
                ease: "easeInOut" 
            }}
            className="relative w-80 h-80 md:w-120 md:h-120 group cursor-pointer"
          >
            {/* Glowing Orbs in background */}
            <div className="absolute -inset-4 bg-linear-to-tr from-cyan-500 to-indigo-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative w-full h-full overflow-hidden rounded-[4rem] border border-white/10 bg-slate-900 shadow-2xl">
              <img 
                src={me?.profileImage} 
                alt={displayName} 
                className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;