import { motion } from 'framer-motion';
import { me } from '../data/config';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const displayName = me?.name || 'Natenael Temesgen';
  const nameChars = Array.from(displayName);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-900 px-4 overflow-hidden light:bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="z-10">
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs md:text-sm font-black text-cyan-400 uppercase tracking-[0.5em] mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] light:text-cyan-600 light:drop-shadow-none"
            >
              Full-Stack Software Developer
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gradient block"
              >
                Building Scalable Full-Stack Applications
              </motion.span>
            </h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-black tracking-tighter flex flex-wrap leading-[0.9] mb-6"
            >
              {nameChars.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.4 + index * 0.04,
                    ease: 'easeOut',
                  }}
                  className="inline-block cursor-default py-1 text-white light:text-slate-900"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl border-l-2 border-cyan-500/50 pl-6 font-light leading-relaxed light:text-slate-600"
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
              <a href={me?.socials?.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors light:text-slate-500 light:hover:text-cyan-600">
                <Github size={28} />
              </a>
              <a href={me?.socials?.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors light:text-slate-500 light:hover:text-pink-600">
                <Linkedin size={28} />
              </a>
              <a href={me?.socials?.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors light:text-slate-500 light:hover:text-blue-600">
                <Twitter size={28} />
              </a>
            </div>

            <a href="#projects" className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black transition-all hover:scale-105 light:bg-slate-900 light:text-white light:hover:bg-slate-800">
              <span>View Projects</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>

        <div className="relative flex items-end justify-center md:justify-end min-h-[420px] md:min-h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full flex justify-center md:justify-end"
          >
            <div className="absolute bottom-[18%] right-[5%] w-56 h-56 md:w-72 md:h-72 bg-cyan-500/25 rounded-full blur-[80px] pointer-events-none light:bg-cyan-400/20" />

            <motion.div
              animate={{
                x: [6, 4, 0, -4, -6, -4, 0, 4, 6],
                y: [0, 6, 8, 6, 0, -6, -8, -6, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <img
                src={me.profileImage}
                alt={me.name}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-[min(78vh,720px)] md:h-[min(88vh,820px)] w-auto max-w-full object-contain object-bottom select-none pointer-events-none light:drop-shadow-lg"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse 75% 88% at 50% 42%, #000 50%, transparent 100%)',
                  maskImage:
                    'radial-gradient(ellipse 75% 88% at 50% 42%, #000 50%, transparent 100%)',
                  filter: 'brightness(1.12) contrast(1.06) saturate(1.05)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
