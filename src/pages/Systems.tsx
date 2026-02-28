import { Check, Layers, Cog, Factory, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { systemArchitectureSteps } from '@/data/content';

const engineeringFramework = [
  {
    icon: Layers,
    title: 'Concept Development',
    description: 'Space analysis, structural requirements, and design integration planning.',
  },
  {
    icon: Cog,
    title: 'Material Engineering',
    description: 'Fire-rated, UV-resistant materials selected for specific environmental conditions.',
  },
  {
    icon: Factory,
    title: 'Industrial Production',
    description: 'Precision manufacturing with quality control at every stage.',
  },
  {
    icon: Truck,
    title: 'Deployment & Installation',
    description: 'Global logistics coordination and professional installation support.',
  },
];

const comparisonData = [
  { traditional: 'Product-focused supplier', laysun: 'System integration platform' },
  { traditional: 'Single-location delivery', laysun: 'Multi-city rollout capability' },
  { traditional: 'Standard products only', laysun: 'Custom engineering solutions' },
  { traditional: 'Limited quality control', laysun: 'End-to-end quality management' },
  { traditional: 'No structural support', laysun: 'Engineering documentation provided' },
];

export function Systems() {
  const [architectureRef, isArchitectureInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [frameworkRef, isFrameworkInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [materialRef, isMaterialInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [comparisonRef, isComparisonInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Artificial Horticulture System Architecture"
        subtitle="A structured integration model combining engineering logic, material science, manufacturing precision, design integration, and scalable deployment."
        backgroundImage="/images/systems-hero.jpg"
        primaryCta={{ text: 'View Projects', href: '/projects' }}
        height="medium"
        alignment="center"
      />

      {/* System Architecture Overview */}
      <section ref={architectureRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="space-y-4">
                {systemArchitectureSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start p-4 bg-laysun-gray-light rounded-lg"
                  >
                    <div className="w-10 h-10 bg-laysun-green text-white rounded-full flex items-center justify-center font-heading font-bold flex-shrink-0 mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-laysun-dark mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-laysun-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Integrated System Framework
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                Our system architecture is built on five interconnected components that ensure
                seamless delivery from concept to installation:
              </p>
              <ul className="space-y-3">
                {[
                  'Engineering logic and structural design',
                  'Material science and compliance standards',
                  'Manufacturing precision and quality control',
                  'Landscape design integration',
                  'Scalable deployment methodology',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Framework */}
      <section ref={frameworkRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Engineering Framework"
            subtitle="Four-stage process ensuring structural reliability and design excellence"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringFramework.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFrameworkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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

      {/* Material & Compliance */}
      <section ref={materialRef} className="bg-laysun-green">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMaterialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
            >
              <h2 className="text-h2 font-heading font-bold mb-6">
                Material Standards & Safety Compliance
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                All materials undergo rigorous testing to meet international safety standards
                for commercial environments. We provide full certification documentation
                for every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Fire Rating: ASTM E84, BS 476',
                  'UV Resistance: 5+ years outdoor',
                  'Structural Load Testing',
                  'Environmental Safety: REACH, RoHS',
                  'Indoor Air Quality: GREENGUARD',
                  'Custom Compliance Support',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMaterialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/manufacturing-facility.jpg"
                alt="Material Testing Laboratory"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why System Integration Matters"
            subtitle="The difference between traditional suppliers and LAYSUN's system approach"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isComparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-xl shadow-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-laysun-green text-white">
                    <th className="px-6 py-4 text-left font-heading font-semibold">
                      Traditional Supplier
                    </th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">
                      LAYSUN System Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-laysun-gray-light'}
                    >
                      <td className="px-6 py-4 text-laysun-gray">{row.traditional}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-laysun-gold mr-2" />
                          <span className="text-laysun-dark font-medium">{row.laysun}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Build Your Commercial Green System With Us"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        buttonText="Request Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
