import { Link } from 'react-router-dom';
import { ArrowRight, Check, Package, Ship, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { KPICounter } from '@/components/KPICounter';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { qualityControlSteps } from '@/data/content';

const productionKPIs = [
  { number: 500000, suffix: '+', label: 'Annual Production Capacity (units)' },
  { number: 200, suffix: '+', label: 'Mold Designs Developed' },
  { number: 12, suffix: '', label: 'Commercial Production Lines' },
  { number: 500, suffix: '+', label: 'Containers Shipped Annually' },
];

const logisticsItems = [
  {
    icon: Package,
    title: 'Export Packaging',
    description: 'Custom packaging solutions designed for international shipping and container optimization.',
  },
  {
    icon: Ship,
    title: 'Private Label Support',
    description: 'Complete OEM services including branding, custom packaging, and documentation.',
  },
  {
    icon: FileText,
    title: 'Global Documentation',
    description: 'Full export documentation, certificates of origin, and compliance paperwork.',
  },
];

export function Manufacturing() {
  const [facilityRef, isFacilityInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [kpiRef, isKpiInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [qcRef, isQcInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [logisticsRef, isLogisticsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Industrial-Scale Artificial Horticulture Manufacturing"
        subtitle="Precision production, material engineering, and scalable capacity supporting global commercial projects."
        backgroundImage="/images/manufacturing-hero.jpg"
        primaryCta={{ text: 'Download Capability Overview', href: '#' }}
        height="medium"
        alignment="center"
      />

      {/* Facility Overview */}
      <section ref={facilityRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFacilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/manufacturing-facility.jpg"
                alt="LAYSUN Production Facility"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFacilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Integrated Production Facility
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                Our 80,000㎡ manufacturing facility combines automated production lines,
                in-house mold development, material testing laboratories, and quality
                control stations under one roof.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'In-house mold development and tooling workshop',
                  'Automated production lines for consistent quality',
                  'Material testing laboratory with fire and UV testing',
                  'Quality control at every production stage',
                  'Global logistics and container loading coordination',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-laysun-green text-white rounded-button font-medium hover:bg-laysun-green-light transition-all duration-300 group"
              >
                <span>Request Facility Tour</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Capacity KPIs */}
      <section ref={kpiRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Production Capacity"
            subtitle="Industrial-scale manufacturing supporting global commercial projects"
            className="mb-12"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {productionKPIs.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isKpiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <KPICounter
                  number={kpi.number}
                  suffix={kpi.suffix}
                  label={kpi.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section ref={qcRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Quality Control Process"
            subtitle="Five-stage quality management ensuring consistent excellence"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isQcInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-laysun-gray-light -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {qualityControlSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="card p-6 h-full">
                    <div className="w-10 h-10 bg-laysun-green text-white rounded-full flex items-center justify-center font-heading font-bold mb-4">
                      {step.number}
                    </div>
                    <h4 className="font-heading font-semibold text-laysun-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-laysun-gray">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="bg-laysun-green">
        <div className="container-custom">
          <div className="py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-white"
              >
                <h2 className="text-h2 font-heading font-bold mb-6">
                  Compliance & Commercial Standards
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Our products meet international safety and quality standards for commercial
                  environments. We provide full certification documentation for every project.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'ASTM E84 (Fire Rating)',
                    'BS 476 (Fire Safety)',
                    'EN 13501 (EU Standard)',
                    'REACH (Chemical Safety)',
                    'RoHS (Environmental)',
                    'GREENGUARD (Indoor Air)',
                  ].map((standard, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-laysun-gold mr-2 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/procurement-hero.jpg"
                  alt="Quality Control Laboratory"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Logistics */}
      <section ref={logisticsRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Packaging & Logistics"
            subtitle="Global shipping coordination and export support"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {logisticsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLogisticsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="card p-6"
                >
                  <div className="w-12 h-12 bg-laysun-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-laysun-green" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-laysun-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-laysun-gray leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procurement Entry */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-laysun-gray-light rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-h3 font-heading font-bold text-laysun-dark mb-4">
                  Bulk Commercial Procurement Support
                </h3>
                <p className="text-laysun-gray mb-6 leading-relaxed">
                  We specialize in large-scale commercial supply for distributors, hotel groups,
                  and retail chains. Our procurement team provides dedicated support for
                  multi-location rollouts.
                </p>
                <Link
                  to="/procurement"
                  className="inline-flex items-center px-6 py-3 bg-laysun-green text-white rounded-button font-medium hover:bg-laysun-green-light transition-all duration-300 group"
                >
                  <span>Explore Procurement</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-heading font-bold text-laysun-gold mb-1">50+</div>
                    <div className="text-sm text-laysun-gray">MOQ (units)</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-heading font-bold text-laysun-gold mb-1">30</div>
                    <div className="text-sm text-laysun-gray">Days Lead Time</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-heading font-bold text-laysun-gold mb-1">100%</div>
                    <div className="text-sm text-laysun-gray">Private Label</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-heading font-bold text-laysun-gold mb-1">24/7</div>
                    <div className="text-sm text-laysun-gray">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Scale Your Commercial Green Production With Confidence"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        buttonText="Request Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
