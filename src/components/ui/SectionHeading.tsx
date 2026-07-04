import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ label, title, highlight, align = 'left' }: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 md:mb-20 ${alignClass}`}
    >
      <p className="section-label">{label}</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
        {title}{' '}
        {highlight && <span className="text-gradient-orange">{highlight}</span>}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
