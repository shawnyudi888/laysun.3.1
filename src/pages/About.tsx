import { Link } from 'react-router-dom';
import { ArrowRight, Check, Factory, Palette, Globe, Award, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';

const coreStrengths = [
  {
    icon: Factory,
    title: 'Manufacturing Scale',
    description: '80,000㎡ production facility with automated lines, in-house mold development, and quality control systems.',
  },
  {
    icon: Palette,
    title: 'Design Integration',
    description: 'Professional landscape design team with early project involvement and structural implementation expertise.',
  },
  {
    icon: Globe,
    title: 'Global Execution',
    description: 'Proven multi-city rollout capability with logistics coordination and installation support worldwide.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Engineering First',
    description: 'Structure safety and system logic always come first.',
  },
  {
    icon: Award,
    title: 'Scalable Thinking',
    description: 'Every project designed with replication and scale in mind.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Discipline',
    description: 'Industrial standards ensure consistent quality and delivery.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description: 'We build relationships, not just complete transactions.',
  },
];

export function About() {
  const [positioningRef, isPositioningInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [philosophyRef, isPhilosophyInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [strengthsRef, isStrengthsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Engineering Structured Artificial Green Systems"
        subtitle="A manufacturing-backed engineering platform integrating in-house production, landscape design, and scalable global execution."
        backgroundImage="/images/about-hero.jpg"
        height="medium"
        alignment="center"
      />

      {/* Company Positioning */}
      <section ref={positioningRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPositioningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
              Who We Are
            </h2>
            <p className="text-body-lg text-laysun-gray leading-relaxed mb-6">
              LAYSUN is built on three core strengths: industrial-scale manufacturing,
              professional landscape design integration, and proven project execution.
              We are not a decorative supplier; we are a system integrator for commercial
              developers and hotel groups worldwide.
            </p>
            <p className="text-body-lg text-laysun-gray leading-relaxed">
              Our mission is to provide scalable, structurally reliable, and globally
              deployable artificial horticulture systems that help our clients achieve
              consistent brand image and investment returns across cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section ref={strengthsRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Strengths"
            subtitle="The three pillars that define our competitive advantage"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStrengthsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="card p-8"
                >
                  <div className="w-14 h-14 bg-laysun-green/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-laysun-green" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-laysun-gray leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section ref={philosophyRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isPhilosophyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Our Engineering Philosophy
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                Every project begins with understanding the structural requirements,
                environmental conditions, and design intent. Our four-step methodology
                ensures consistent excellence:
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Space Analysis', desc: 'Site assessment and structural requirements evaluation' },
                  { step: '02', title: 'System Design', desc: 'Custom engineering solution with material specifications' },
                  { step: '03', title: 'Manufacturing', desc: 'Precision production with quality control at every stage' },
                  { step: '04', title: 'Deployment', desc: 'Global logistics coordination and installation support' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="w-10 h-10 bg-laysun-green text-white rounded-lg flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-laysun-dark">
                        {item.title}
                      </h4>
                      <p className="text-sm text-laysun-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isPhilosophyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/systems-hero.jpg"
                alt="Engineering Process"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Manufacturing */}
      <section className="bg-laysun-green">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/manufacturing-facility.jpg"
                alt="Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
            >
              <h2 className="text-h2 font-heading font-bold mb-6">
                Vertically Integrated Manufacturing
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our in-house manufacturing capability ensures cost control, quality
                consistency, and delivery reliability. From mold development to final
                inspection, every stage is managed under our direct supervision.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'In-house mold development and tooling',
                  'Automated production lines',
                  'Material testing laboratory',
                  'Quality control at every stage',
                  'Global logistics coordination',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/manufacturing"
                className="inline-flex items-center px-6 py-3 bg-white text-laysun-green rounded-button font-medium hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Explore Manufacturing</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Execution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Global Execution Capability
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                We have delivered projects across 30+ countries, with particular strength
                in multi-city rollouts for hotel groups and retail chains. Our logistics
                team coordinates container loading, shipping, and customs documentation
                for seamless global delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: '30+', label: 'Countries' },
                  { number: '120+', label: 'Projects' },
                  { number: '50+', label: 'Multi-Site Rollouts' },
                  { number: '15+', label: 'Years Experience' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-laysun-gray-light rounded-lg">
                    <div className="text-2xl font-heading font-bold text-laysun-gold">
                      {stat.number}
                    </div>
                    <div className="text-sm text-laysun-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/projects-hero.jpg"
                alt="Global Projects"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and relationships"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="card p-6 text-center"
                >
                  <div className="w-12 h-12 bg-laysun-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-laysun-green" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-laysun-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-laysun-gray">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
              Our Long-Term Vision
            </h2>
            <p className="text-body-lg text-laysun-gray leading-relaxed mb-8">
              To become the global engineering platform and standard-setter for artificial
              horticulture systems in commercial spaces. We aim to establish structural
              standards, system methodologies, and best practices that elevate the entire
              industry.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-laysun-green/10 rounded-full">
              <span className="text-laysun-green font-medium">
                Systematic Greenery, Consistent Value for Global Developers
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Partner With an Engineering-Driven Team"
        subtitle="Let's structure your multi-city green system project."
        buttonText="Request Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
