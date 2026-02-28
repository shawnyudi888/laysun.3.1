import { Link } from 'react-router-dom';
import { ArrowRight, Check, Package, Ship, FileText, Factory, BadgeCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { moqTable, faqItems } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const bulkCapabilities = [
  {
    icon: Factory,
    title: 'Standardized Production Lines',
    description: 'Automated manufacturing ensures consistent quality at scale.',
  },
  {
    icon: Package,
    title: 'Large Volume Capacity',
    description: '500,000+ units annual production capacity.',
  },
  {
    icon: BadgeCheck,
    title: 'Consistent Material Control',
    description: 'Batch tracking and quality control throughout production.',
  },
  {
    icon: Ship,
    title: 'Global Shipment Coordination',
    description: 'Container optimization and logistics management.',
  },
];

const distributorBenefits = [
  'Stable production scheduling for long-term contracts',
  'Priority allocation during peak seasons',
  'Dedicated account management',
  'Volume-based pricing structures',
  'Marketing and technical support',
];

export function Procurement() {
  const [capabilitiesRef, isCapabilitiesInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [faqRef, isFaqInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Commercial Bulk Procurement Support"
        subtitle="Structured artificial horticulture supply for distributors, commercial buyers and private label partners."
        backgroundImage="/images/procurement-hero.jpg"
        primaryCta={{ text: 'Submit Bulk Inquiry', href: '/contact' }}
        height="medium"
        alignment="center"
      />

      {/* Procurement Positioning */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Focused on Commercial-Grade Supply"
              subtitle="We specialize in large-scale commercial procurement, not retail. Our infrastructure is designed to support distributors, hotel groups, retail chains, and commercial developers with consistent quality, reliable delivery, and dedicated account management."
            />
          </div>
        </div>
      </section>

      {/* Bulk Supply Capabilities */}
      <section ref={capabilitiesRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Bulk Supply Capabilities"
            subtitle="Industrial-scale production supporting global commercial demand"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bulkCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="card p-6 text-center"
                >
                  <div className="w-14 h-14 bg-laysun-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-laysun-green" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-laysun-dark mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-laysun-gray">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOQ & Lead Time Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="MOQ & Lead Time"
            subtitle="Standard procurement terms by product category"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-xl shadow-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-laysun-green text-white">
                    <th className="px-6 py-4 text-left font-heading font-semibold">
                      Product Category
                    </th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">
                      MOQ
                    </th>
                    <th className="px-6 py-4 text-left font-heading font-semibold">
                      Lead Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {moqTable.map((row, index) => (
                    <tr
                      key={row.category}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-laysun-gray-light'}
                    >
                      <td className="px-6 py-4 text-laysun-dark font-medium">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-laysun-gray">{row.moq}</td>
                      <td className="px-6 py-4 text-laysun-gray">{row.leadTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-laysun-gray mt-4 text-center">
              * Lead times may vary based on order volume and customization requirements.
              Contact us for project-specific timelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Private Label & Customization */}
      <section className="bg-laysun-green">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
            >
              <h2 className="text-h2 font-heading font-bold mb-6">
                Private Label & Customization
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Comprehensive OEM services for distributors and brand partners. From
                product design to packaging, we support your brand identity while
                maintaining our engineering standards.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Custom branding and labeling',
                  'Private packaging design',
                  'Product specification modifications',
                  'Exclusive mold development',
                  'Marketing material support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-laysun-green rounded-button font-medium hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Discuss Private Label</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
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
                src="/images/products-hero.jpg"
                alt="Private Label Products"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging & Logistics */}
      <section className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="card p-8"
            >
              <div className="w-14 h-14 bg-laysun-green/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-laysun-green" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-3">
                Export Packaging
              </h3>
              <p className="text-laysun-gray leading-relaxed">
                Custom packaging solutions designed for international shipping,
                container optimization, and product protection during transit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="card p-8"
            >
              <div className="w-14 h-14 bg-laysun-green/10 rounded-lg flex items-center justify-center mb-6">
                <Ship className="w-7 h-7 text-laysun-green" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-3">
                Container Optimization
              </h3>
              <p className="text-laysun-gray leading-relaxed">
                Strategic loading plans to maximize container space utilization
                and minimize shipping costs for bulk orders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="card p-8"
            >
              <div className="w-14 h-14 bg-laysun-green/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-laysun-green" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-3">
                Documentation Support
              </h3>
              <p className="text-laysun-gray leading-relaxed">
                Complete export documentation including certificates of origin,
                compliance certificates, and customs paperwork.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-laysun-gray-light rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-h3 font-heading font-bold text-laysun-dark mb-4">
                  Distributor Support Model
                </h3>
                <p className="text-laysun-gray mb-6 leading-relaxed">
                  We build long-term partnerships with our distributors, providing
                  consistent supply, marketing support, and technical assistance
                  to help you grow your business.
                </p>
                <ul className="space-y-3">
                  {distributorBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-laysun-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white rounded-xl p-6 text-center">
                  <Clock className="w-8 h-8 text-laysun-gold mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold text-laysun-dark mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-laysun-gray">Support</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <BadgeCheck className="w-8 h-8 text-laysun-gold mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold text-laysun-dark mb-1">
                    100%
                  </div>
                  <div className="text-sm text-laysun-gray">Quality Guarantee</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Package className="w-8 h-8 text-laysun-gold mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold text-laysun-dark mb-1">
                    500K+
                  </div>
                  <div className="text-sm text-laysun-gray">Annual Capacity</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Ship className="w-8 h-8 text-laysun-gold mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold text-laysun-dark mb-1">
                    30+
                  </div>
                  <div className="text-sm text-laysun-gray">Countries Served</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions from commercial buyers and distributors"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-laysun-dark hover:text-laysun-green py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-laysun-gray pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Start Your Bulk Procurement Discussion"
        subtitle="Our procurement team responds within 12 hours for qualified commercial inquiries."
        buttonText="Submit Procurement Inquiry"
        buttonHref="/contact"
      />
    </main>
  );
}
