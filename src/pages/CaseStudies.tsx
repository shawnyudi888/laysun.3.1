import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Building2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { projects, industries } from '@/data/content';

const caseStudyKPIs = [
  { number: 8, suffix: 'm', label: 'Max Structural Span' },
  { number: 25, suffix: '+', label: 'Multi-City Rollouts' },
  { number: 100, suffix: '%', label: 'Fire-Rated Deployments' },
  { number: 12, suffix: '', label: 'Weeks Avg. Delivery' },
];

const processSteps = [
  { number: 1, title: 'Space Analysis', description: 'Site assessment and requirements gathering' },
  { number: 2, title: 'Material Evaluation', description: 'Fire rating, UV resistance, structural needs' },
  { number: 3, title: 'System Planning', description: 'Engineering design and modular approach' },
  { number: 4, title: 'Production Execution', description: 'Manufacturing with quality control' },
  { number: 5, title: 'Installation Delivery', description: 'On-site deployment and final inspection' },
];

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [casesRef, isCasesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [kpiRef, isKpiInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  // Filter only case study projects (scalable ones)
  const caseStudies = projects.filter((p) => p.scalable);
  const filteredCaseStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((project) => project.industry === activeFilter);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Engineering Case Studies"
        subtitle="Structured artificial horticulture systems designed, manufactured and deployed for complex commercial environments — from single landmarks to multi-city programs."
        backgroundImage="/images/case-studies-hero.jpg"
        primaryCta={{ text: 'Explore Detailed Cases', href: '#case-studies-grid' }}
        height="medium"
        alignment="center"
      />

      {/* Philosophy Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Case Studies as Engineering Practice"
              subtitle="Each case study represents a real-world application of our system approach. These are not product showcases — they are documented engineering solutions that demonstrate structural integrity, material compliance, and scalable deployment methodology."
            />
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-laysun-gray-light border-b border-gray-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === industry
                    ? 'bg-laysun-green text-white'
                    : 'bg-white text-laysun-dark hover:bg-laysun-green/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies-grid" ref={casesRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isCasesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="card group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-laysun-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                      {caseStudy.clientType && (
                        <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {caseStudy.clientType}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {caseStudy.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{caseStudy.location}, {caseStudy.country}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-laysun-gray mb-4">{caseStudy.excerpt}</p>
                  <Link
                    to={`/projects/${caseStudy.slug}`}
                    className="inline-flex items-center text-laysun-green font-medium hover:text-laysun-gold transition-colors group/link"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-laysun-gray text-lg">
                No case studies found for this category. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Engineering Impact */}
      <section ref={kpiRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Engineering Impact"
            subtitle="Quantifiable results from our system approach"
            className="mb-12"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {caseStudyKPIs.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isKpiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-center"
              >
                <div className="text-kpi font-heading font-bold text-laysun-gold mb-2">
                  {kpi.number}{kpi.suffix}
                </div>
                <div className="text-body text-laysun-gray">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Solve Complex Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="How We Solve Complex Projects"
            subtitle="Our five-step methodology for delivering engineered horticulture systems"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-laysun-gray-light -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="card p-6 h-full text-center">
                    <div className="w-12 h-12 bg-laysun-green text-white rounded-full flex items-center justify-center font-heading font-bold mx-auto mb-4">
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

      {/* Industry Categories */}
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
                  Industry Expertise
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  We have deep experience across multiple commercial sectors, each with
                  unique requirements for fire safety, structural integration, and
                  design consistency.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, name: 'Hospitality', desc: 'Hotels & Resorts' },
                    { icon: Layers, name: 'Retail', desc: 'Stores & Malls' },
                    { icon: Building2, name: 'Commercial', desc: 'Office & Mixed-Use' },
                    { icon: MapPin, name: 'Public Space', desc: 'Civic & Cultural' },
                  ].map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <div key={industry.name} className="bg-white/10 rounded-lg p-4">
                        <Icon className="w-6 h-6 text-laysun-gold mb-2" />
                        <h4 className="font-heading font-semibold text-white">
                          {industry.name}
                        </h4>
                        <p className="text-white/70 text-sm">{industry.desc}</p>
                      </div>
                    );
                  })}
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
                  src="/images/project-dubai.jpg"
                  alt="Industry Projects"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Replication */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/projects-hero.jpg"
                alt="Multi-City Rollout"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Multi-City Replication
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                Our system approach is designed for scalability. Hotel groups and retail
                chains benefit from consistent quality, standardized installation, and
                coordinated logistics across all locations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Standardized product specifications across all locations',
                  'Coordinated production and shipping schedules',
                  'Consistent installation methodology',
                  'Centralized quality control and documentation',
                  'Dedicated project management for rollouts',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/projects"
                className="inline-flex items-center text-laysun-green font-medium hover:text-laysun-gold transition-colors group"
              >
                <span>View Multi-City Projects</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Discuss a Multi-City Project"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        buttonText="Request Engineering Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
