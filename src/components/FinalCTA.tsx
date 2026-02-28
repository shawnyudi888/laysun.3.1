import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface FinalCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export function FinalCTA({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: FinalCTAProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-laysun-green py-20 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-h2 lg:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={buttonHref}
              className="inline-flex items-center px-8 py-4 bg-white text-laysun-green rounded-button font-medium hover:bg-white/90 transition-all duration-300 group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex items-center justify-center mt-8 text-white/60 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>12-hour response guarantee for qualified inquiries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
