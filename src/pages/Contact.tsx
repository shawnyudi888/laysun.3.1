import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [formRef, isFormInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <HeroSection
        title="Start Your Multi-City Green System Project"
        subtitle="Our engineering team responds within 12 hours for qualified commercial inquiries."
        backgroundImage="/images/contact-hero.jpg"
        height="small"
        alignment="center"
      />

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

      {/* Contact Form */}
      <section ref={formRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-laysun-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-laysun-green" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-laysun-dark mb-4">
                    Thank You!
                  </h3>
                  <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-laysun-green text-white rounded-button"
                  >
                    Return to Homepage
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-6">
                    Project Inquiry Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                      <Input id="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input id="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={4} placeholder="Your message..." />
                    </div>
                    <Button type="submit" className="w-full bg-laysun-green text-white py-6">
                      Submit
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
