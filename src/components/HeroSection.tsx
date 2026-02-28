import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  height?: 'full' | 'large' | 'medium' | 'small';
  alignment?: 'left' | 'center';
  overlayOpacity?: number;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
  height = 'large',
  alignment = 'left',
  overlayOpacity = 0.6,
}: HeroSectionProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh] min-h-[600px]',
    medium: 'h-[65vh] min-h-[500px]',
    small: 'h-[50vh] min-h-[400px]',
  };

  const alignmentClasses = {
    left: 'items-center justify-start text-left',
    center: 'items-center justify-center text-center',
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex ${alignmentClasses[alignment]} overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              alignment === 'center'
                ? `linear-gradient(to bottom, rgba(15, 61, 46, ${overlayOpacity}), rgba(15, 61, 46, ${overlayOpacity + 0.15}))`
                : `linear-gradient(to right, rgba(15, 61, 46, ${overlayOpacity + 0.15}), rgba(15, 61, 46, ${overlayOpacity - 0.15}))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}
        >
          <h1 className="text-h1 lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                alignment === 'center' ? 'justify-center' : ''
              }`}
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-laysun-green rounded-button font-medium hover:bg-white/90 transition-all duration-300 group"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-button font-medium hover:bg-white hover:text-laysun-green transition-all duration-300"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
