import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Shield, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { KPICounter } from '@/components/KPICounter';
import { ProjectCard } from '@/components/ProjectCard';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import {
  companyInfo,
  homeKPIs,
  engineeringApproach,
  manufacturingCapabilities,
  projects,
} from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Settings,
  Shield,
  Globe,
};

export function Home() {
  const [approachRef, isApproachInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [manufacturingRef, isManufacturingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [projectsRef, isProjectsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [kpiRef, isKpiInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [globalRef, isGlobalInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={companyInfo.tagline}
        subtitle="Integrated system design, in-house manufacturing, landscape design integration, and scalable delivery for multi-city projects."
        backgroundImage="/images/home-hero.jpg"
        primaryCta={{ text: 'Explore Systems', href: '/systems' }}
        secondaryCta={{ text: 'Manufacturing Capability', href: '/manufacturing' }}
        height="large"
        alignment="left"
      />

      {/* System Positioning Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="What Makes LAYSUN a System Integrator?"
              subtitle="We are not a decorative supplier selling individual plants. We are a manufacturing-backed engineering platform that integrates in-house production, professional landscape design, and scalable global execution for commercial developers and hotel groups."
            />
            <div className="mt-8">
              <Link
                to="/systems"
                className="inline-flex items-center text-laysun-green font-medium hover:text-laysun-gold transition-colors group"
              >
                <span>View System Architecture</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach Section */}
      <section ref={approachRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Engineering Approach"
            subtitle="Three pillars that define our system integration capability"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringApproach.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                    {item.title}
                  </h3>
                  <p className="text-laysun-gray leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Support Section */}
      <section ref={manufacturingRef} className="bg-laysun-green">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isManufacturingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="/images/manufacturing-facility.jpg"
                alt="LAYSUN Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isManufacturingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
            >
              <h2 className="text-h2 font-heading font-bold mb-6">
                In-House Manufacturing.
                <br />
                Industrial Precision.
              </h2>
              <ul className="space-y-4 mb-8">
                {manufacturingCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-laysun-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{capability}</span>
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

      {/* Project Showcase Section */}
      <section ref={projectsRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Selected Commercial Projects"
            subtitle="Engineered artificial horticulture systems implemented across global commercial environments"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
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

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-laysun-green text-white rounded-button font-medium hover:bg-laysun-green-light transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Data Section */}
      <section ref={kpiRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {homeKPIs.map((kpi, index) => (
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

      {/* Global Presence Section */}
      <section ref={globalRef} className="relative py-20 lg:py-24 bg-laysun-green overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-20">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Simplified world map paths */}
            <path
              fill="currentColor"
              className="text-white"
              d="M150,120 Q200,100 250,130 T350,120 Q400,100 450,140 T550,130 Q600,110 650,150 T750,140 Q800,120 850,160"
            />
            {/* North America */}
            <path
              fill="currentColor"
              className="text-laysun-gold"
              d="M50,80 L200,60 L250,150 L150,200 L50,150 Z"
            />
            {/* Europe */}
            <path
              fill="currentColor"
              className="text-laysun-gold"
              d="M420,90 L520,80 L540,150 L450,160 Z"
            />
            {/* Middle East */}
            <path
              fill="currentColor"
              className="text-laysun-gold"
              d="M520,140 L600,130 L620,200 L540,210 Z"
            />
            {/* Asia */}
            <path
              fill="currentColor"
              className="text-laysun-gold"
              d="M620,80 L850,70 L900,200 L700,220 Z"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGlobalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 font-heading font-bold text-white mb-4">
              Global Delivery Capability
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Delivering multi-city projects across North America, Middle East, Europe and Asia.
              Our engineering team ensures consistent quality and on-time delivery worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['North America', 'Middle East', 'Europe', 'Asia'].map((region) => (
                <div
                  key={region}
                  className="flex items-center space-x-2 text-white/90"
                >
                  <MapPin className="w-5 h-5 text-laysun-gold" />
                  <span>{region}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Start Your Multi-City Green System Project"
        subtitle="Talk to our engineering team within 12 hours for qualified commercial inquiries."
        buttonText="Request Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
