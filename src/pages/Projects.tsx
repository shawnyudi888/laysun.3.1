import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { KPICounter } from '@/components/KPICounter';
import { ProjectCard } from '@/components/ProjectCard';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { projects, industries } from '@/data/content';

const projectKPIs = [
  { number: 120, suffix: '+', label: 'Commercial Projects' },
  { number: 30, suffix: '+', label: 'Countries Served' },
  { number: 85, suffix: '%', label: 'Repeat Clients' },
  { number: 50, suffix: '+', label: 'Multi-Site Rollouts' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [kpiRef, isKpiInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [projectsRef, isProjectsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.industry === activeFilter);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Commercial Project Portfolio"
        subtitle="Engineered artificial horticulture systems implemented across global commercial environments — from single flagship installations to multi-city rollouts."
        backgroundImage="/images/projects-hero.jpg"
        primaryCta={{ text: 'Explore Case Details', href: '#projects-grid' }}
        height="medium"
        alignment="center"
      />

      {/* Industry Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === industry
                    ? 'bg-laysun-green text-white'
                    : 'bg-laysun-gray-light text-laysun-dark hover:bg-laysun-green/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" ref={projectsRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-laysun-gray text-lg">
                No projects found for this category. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project KPIs */}
      <section ref={kpiRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {projectKPIs.map((kpi, index) => (
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

      {/* Global Distribution */}
      <section className="py-20 lg:py-24 bg-laysun-green">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
            >
              <h2 className="text-h2 font-heading font-bold mb-6">
                Global Project Distribution
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our projects span across 30+ countries, with concentrated presence in key
                commercial markets. We have extensive experience with multi-city rollouts
                for hotel groups and retail chains.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold text-laysun-gold mb-2">
                    North America
                  </h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>USA</li>
                    <li>Canada</li>
                    <li>Mexico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-laysun-gold mb-2">
                    Middle East
                  </h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>UAE</li>
                    <li>Qatar</li>
                    <li>Saudi Arabia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-laysun-gold mb-2">
                    Europe
                  </h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>UK</li>
                    <li>Germany</li>
                    <li>Italy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-laysun-gold mb-2">
                    Asia Pacific
                  </h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>Singapore</li>
                    <li>Australia</li>
                    <li>Japan</li>
                  </ul>
                </div>
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
                src="/images/global-map.jpg"
                alt="Global Project Distribution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-laysun-green/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Projects Matter */}
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
                src="/images/case-studies-hero.jpg"
                alt="Project Implementation"
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
                Projects Validate System Integrity
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                Every project we complete reinforces our system approach. From initial
                concept to final installation, our engineering team ensures structural
                reliability, design integration, and long-term performance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Engineering documentation for every project',
                  'Structural load calculations and safety verification',
                  'Material compliance certification',
                  'Installation supervision and quality assurance',
                  'Post-installation support and maintenance guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/case-studies"
                className="inline-flex items-center text-laysun-green font-medium hover:text-laysun-gold transition-colors group"
              >
                <span>View Detailed Case Studies</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Discuss Your Commercial Project Requirements"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        buttonText="Request Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
