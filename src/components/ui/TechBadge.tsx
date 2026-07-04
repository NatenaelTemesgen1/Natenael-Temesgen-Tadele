import { getTechIcon } from '../../data/techIcons';
import { TechIconWithFallback } from './TechIcon';

interface TechBadgeProps {
  name: string;
  icon?: string;
  size?: 'sm' | 'md';
  className?: string;
}

const sizeStyles = {
  sm: { icon: 14, text: 'text-[9px]', pad: 'px-2 py-1 gap-1.5', iconBox: 'w-4 h-4' },
  md: { icon: 16, text: 'text-[10px] md:text-xs', pad: 'px-2.5 py-1.5 gap-2', iconBox: 'w-5 h-5' },
};

const TechBadge = ({ name, icon, size = 'md', className = '' }: TechBadgeProps) => {
  const s = sizeStyles[size];
  const iconPath = icon ?? getTechIcon(name);

  return (
    <span
      className={`inline-flex items-center ${s.pad} bg-white/5 text-slate-300 rounded-full border border-white/5 hover:border-cyan-500/50 hover:text-white transition-all font-bold ${s.text} ${className}`}
    >
      <span className={`${s.iconBox} flex items-center justify-center shrink-0`}>
        <TechIconWithFallback icon={iconPath} name={name} size={s.icon} />
      </span>
      {name}
    </span>
  );
};

export default TechBadge;
