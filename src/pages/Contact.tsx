import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';

export function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Start Your Multi-City Green System Project"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        backgroundImage="/images/contact-hero.jpg"
        height="small"
        alignment="center"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Commercial & Procurement Inquiries"
              subtitle="We specialize in large-scale commercial projects for hotel groups, retail chains, and commercial developers."
            />
          </div>
        </div>
      </section>

      {/* Simple Test Section */}
      <section className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-6">
              Project Inquiry Form
            </h3>
            <p className="text-laysun-gray mb-4">
              Test: HeroSection and SectionTitle are working!
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-laysun-green text-white rounded-button"
            >
              Return to Homepage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
