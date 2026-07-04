import { deviconUrl } from '../../data/techIcons';

interface TechIconProps {
  icon: string;
  name: string;
  size?: number;
  className?: string;
}

const TechIcon = ({ icon, name, size = 28, className = '' }: TechIconProps) => (
  <img
    src={deviconUrl(icon)}
    alt={name}
    width={size}
    height={size}
    loading="lazy"
    className={`object-contain ${className}`}
    onError={(e) => {
      const target = e.currentTarget;
      target.style.display = 'none';
      const fallback = target.nextElementSibling as HTMLElement | null;
      if (fallback) fallback.style.display = 'flex';
    }}
  />
);

export const TechIconWithFallback = ({ icon, name, size = 28, className = '' }: TechIconProps) => (
  <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
    <TechIcon icon={icon} name={name} size={size} />
    <span
      className="hidden w-full h-full items-center justify-center text-[10px] font-bold text-cyan-400 bg-cyan-500/10 rounded-lg"
      aria-hidden
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  </div>
);

export default TechIcon;
