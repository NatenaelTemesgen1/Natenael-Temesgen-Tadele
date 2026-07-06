import { Sun, Moon } from 'lucide-react';
import { getCurrentTheme, toggleTheme, type ThemeMode } from '../../lib/theme';
import { useEffect, useState } from 'react';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => getCurrentTheme());

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'light' ? '#ffffff' : '#030712');
  }, [theme]);

  const handleToggle = () => {
    setTheme((current) => toggleTheme(current));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors light:bg-slate-100 light:text-slate-700 light:border-slate-200 light:hover:border-cyan-500 light:hover:text-cyan-600 ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
