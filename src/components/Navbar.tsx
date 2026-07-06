import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-3 light:bg-white/90 light:border-slate-200 light:shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <span className="text-2xl font-black tracking-tighter cursor-pointer bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform inline-block light:from-cyan-600 light:to-indigo-600">
                NT.
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group text-slate-400 hover:text-white text-xs uppercase tracking-[0.2em] font-bold transition-colors light:text-slate-600 light:hover:text-slate-900"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 animate-in fade-in slide-in-from-top-5 duration-300 light:bg-white light:border-slate-200 light:shadow-lg">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-400 hover:text-cyan-400 px-3 py-4 text-lg font-black uppercase tracking-widest border-b border-white/5 light:text-slate-600 light:hover:text-cyan-600 light:border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
