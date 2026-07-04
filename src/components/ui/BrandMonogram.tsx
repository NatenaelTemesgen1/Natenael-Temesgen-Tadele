interface BrandMonogramProps {
  size?: 'sm' | 'md';
  className?: string;
}

const boxSizes = { sm: 'w-9 h-9', md: 'w-11 h-11' };
const svgSizes = { sm: 20, md: 24 };

/** Stylized geometric N — navbar & footer branding only */
const BrandMonogram = ({ size = 'sm', className = '' }: BrandMonogramProps) => {
  const dim = svgSizes[size];

  return (
    <div
      className={`${boxSizes[size]} rounded-xl bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.35)] shrink-0 ${className}`}
    >
      <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" aria-hidden>
        <path
          d="M18 82V18h14l28 42V18h14v64H60L32 40v42H18z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default BrandMonogram;
