import { useState } from 'react';
import { deviconUrl, simpleIconUrl, getTechIconConfig } from '../../data/techIcons';

interface TechIconProps {
  name: string;
  devicon?: string;
  simpleIcon?: string;
  size?: number;
  className?: string;
}

type LoadStage = 'devicon' | 'simple' | 'text';

const resolveSources = (name: string, devicon?: string, simpleIcon?: string) => {
  if (devicon || simpleIcon) {
    return { devicon, simpleIcon };
  }
  const config = getTechIconConfig(name);
  return { devicon: config.devicon, simpleIcon: config.simpleIcon };
};

const TechIcon = ({ name, devicon, simpleIcon, size = 28, className = '' }: TechIconProps) => {
  const sources = resolveSources(name, devicon, simpleIcon);
  const initialStage: LoadStage = sources.devicon ? 'devicon' : sources.simpleIcon ? 'simple' : 'text';
  const [stage, setStage] = useState<LoadStage>(initialStage);

  if (stage === 'text') {
    return (
      <span
        className={`flex items-center justify-center text-[10px] font-bold text-cyan-400 bg-cyan-500/10 rounded-lg light:text-cyan-700 light:bg-cyan-100 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  const src =
    stage === 'devicon' && sources.devicon
      ? deviconUrl(sources.devicon)
      : sources.simpleIcon
        ? simpleIconUrl(sources.simpleIcon)
        : '';

  if (!src) {
    return (
      <span
        className={`flex items-center justify-center text-[10px] font-bold text-cyan-400 bg-cyan-500/10 rounded-lg light:text-cyan-700 light:bg-cyan-100 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  const handleError = () => {
    if (stage === 'devicon' && sources.simpleIcon) {
      setStage('simple');
      return;
    }
    setStage('text');
  };

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      className={`object-contain ${className}`}
      onError={handleError}
    />
  );
};

export const TechIconWithFallback = (props: TechIconProps) => (
  <div
    className={`relative flex items-center justify-center shrink-0 ${props.className ?? ''}`}
    style={{ width: props.size ?? 28, height: props.size ?? 28 }}
  >
    <TechIcon {...props} />
  </div>
);

export default TechIcon;
