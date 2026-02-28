import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Leaf, TreePine, Layers, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { ProductCard } from '@/components/ProductCard';
import { FinalCTA } from '@/components/FinalCTA';
import { useInView } from '@/hooks/useInView';
import { products, productCategories } from '@/data/content';

const productFeatures = [
  'Standardized structural frameworks for system integration',
  'Fire-rated and UV-resistant material options',
  'Modular design for scalable deployment',
  'Engineering documentation provided',
  'Customization support for project-specific needs',
];

const customizationOptions = [
  'Size and scale modifications',
  'Material specification adjustments',
  'Color and finish customization',
  'Structural reinforcement options',
  'Multi-city rollout consistency',
];

export function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [productsRef, isProductsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Standardized Artificial Horticulture Product Lines"
        subtitle="Engineered product structures supporting commercial systems and bulk procurement."
        backgroundImage="/images/products-hero.jpg"
        primaryCta={{ text: 'Explore Categories', href: '#products-grid' }}
        height="medium"
        alignment="center"
      />

      {/* Product Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Products as System Components"
              subtitle="Our products are designed as integral components of larger horticulture systems, not standalone decorative items. Every model follows standardized structural frameworks that enable seamless integration and scalable deployment."
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-laysun-gray-light border-b border-gray-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-laysun-green text-white'
                    : 'bg-white text-laysun-dark hover:bg-laysun-green/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" ref={productsRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-laysun-gray text-lg">
                No products found for this category. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Technical Specifications
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                All products follow standardized technical frameworks that ensure
                consistent quality, structural reliability, and system compatibility.
              </p>
              <div className="space-y-3">
                {productFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl p-8 shadow-card"
            >
              <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-6">
                Standard Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-laysun-gray">Height Range</span>
                  <span className="text-laysun-dark font-medium">1m - 8m</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-laysun-gray">Materials</span>
                  <span className="text-laysun-dark font-medium">PE, PVC, Steel</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-laysun-gray">UV Protection</span>
                  <span className="text-laysun-dark font-medium">5+ years outdoor</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-laysun-gray">Fire Rating</span>
                  <span className="text-laysun-dark font-medium">ASTM E84, BS 476</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-laysun-gray">Warranty</span>
                  <span className="text-laysun-dark font-medium">2-5 years</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="/images/manufacturing-facility.jpg"
                alt="Product Customization"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-h2 font-heading font-bold text-laysun-dark mb-6">
                Customization Options
              </h2>
              <p className="text-body-lg text-laysun-gray mb-6 leading-relaxed">
                We understand that every project has unique requirements. Our engineering
                team works with you to customize products while maintaining system
                integrity and scalability.
              </p>
              <div className="space-y-3 mb-8">
                {customizationOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <Settings className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-dark">{option}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-laysun-green text-white rounded-button font-medium hover:bg-laysun-green-light transition-all duration-300 group"
              >
                <span>Discuss Custom Requirements</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Integration */}
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
                  Part of a Larger System
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our products are designed to work together as part of comprehensive
                  horticulture systems. From individual trees to vertical green walls,
                  every component follows the same engineering principles.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Standardized mounting systems',
                    'Compatible structural frameworks',
                    'Unified material specifications',
                    'Consistent quality standards',
                    'Integrated logistics support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/systems"
                  className="inline-flex items-center px-6 py-3 bg-white text-laysun-green rounded-button font-medium hover:bg-white/90 transition-all duration-300 group"
                >
                  <span>Explore Our Systems</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <TreePine className="w-10 h-10 text-laysun-gold mx-auto mb-4" />
                  <h4 className="text-white font-heading font-semibold mb-2">
                    Artificial Trees
                  </h4>
                  <p className="text-white/70 text-sm">Olive, Ficus, Palm varieties</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Leaf className="w-10 h-10 text-laysun-gold mx-auto mb-4" />
                  <h4 className="text-white font-heading font-semibold mb-2">
                    Artificial Plants
                  </h4>
                  <p className="text-white/70 text-sm">Monstera, Ferns, Succulents</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Layers className="w-10 h-10 text-laysun-gold mx-auto mb-4" />
                  <h4 className="text-white font-heading font-semibold mb-2">
                    Vertical Green
                  </h4>
                  <p className="text-white/70 text-sm">Modular wall systems</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Settings className="w-10 h-10 text-laysun-gold mx-auto mb-4" />
                  <h4 className="text-white font-heading font-semibold mb-2">
                    Custom Components
                  </h4>
                  <p className="text-white/70 text-sm">Structural frames, mounts</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Request Structured Product Quotation"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        buttonText="Submit RFQ"
        buttonHref="/contact"
      />
    </main>
  );
}
