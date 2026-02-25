import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { me } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle top glow to separate from contact section */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-black text-white tracking-tighter">
              NATENAEL<span className="text-cyan-400">.</span>T
            </span>
            <p className="mt-6 text-sm leading-relaxed font-light">
              Designing and developing robust digital solutions with a focus on clean code and high-performance architectures.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.3em]">Directory</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-cyan-400 transition-colors capitalize">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.3em]">Capabilities</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-indigo-400 transition-colors cursor-default">Frontend Development</li>
              <li className="hover:text-indigo-400 transition-colors cursor-default">Backend Systems</li>
              <li className="hover:text-indigo-400 transition-colors cursor-default">Network Infrastructure</li>
              <li className="hover:text-indigo-400 transition-colors cursor-default">Database Design</li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.3em]">Social Lab</h4>
            <div className="flex gap-4 mb-10">
              {[
                { icon: Github, href: me.socials.github, hover: 'hover:bg-white hover:text-black' },
                { icon: Linkedin, href: me.socials.linkedin, hover: 'hover:bg-blue-600 hover:text-white' },
                { icon: Twitter, href: me.socials.twitter, hover: 'hover:bg-cyan-400 hover:text-white' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`p-3 bg-white/5 rounded-xl transition-all duration-300 border border-white/5 ${social.hover}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest hover:text-cyan-400 transition-colors"
            >
              UPWARD BOUND 
              <div className="p-2 bg-white/5 rounded-full group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={14} className="text-cyan-400" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© {currentYear} Natenael Temesgen</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-pink-500">❤️</span> in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;