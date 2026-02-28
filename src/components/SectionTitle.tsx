import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionTitleProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`${alignmentClasses[alignment]} ${className}`}
    >
      <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-laysun-gray max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
