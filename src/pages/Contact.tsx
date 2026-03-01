import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle, Check, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { SectionTitle } from '@/components/SectionTitle';
import { useInView } from '@/hooks/useInView';
import { offices, projectTypes, budgetRanges, timelines } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Contact() {
  const [formRef, isFormInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [officeRef, isOfficeInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate RFQ ID
    const id = `RFQ${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
    setRfqId(id);
    setSubmitted(true);
  };

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
              subtitle="We specialize in large-scale commercial projects for hotel groups, retail chains, and commercial developers. Our engineering team is ready to discuss your multi-city rollout requirements."
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-laysun-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-laysun-green" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-laysun-dark mb-4">
                      Thank You for Your Inquiry
                    </h3>
                    <p className="text-laysun-gray mb-4">
                      Your reference number is:{' '}
                      <span className="font-mono font-bold text-laysun-green">{rfqId}</span>
                    </p>
                    <p className="text-laysun-gray mb-8">
                      Our engineering team will review your requirements and respond within 12 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-laysun-green text-white rounded-button font-medium hover:bg-laysun-green-light transition-colors"
                      >
                        Return to Homepage
                      </Link>
                      <Link
                        to="/systems"
                        className="inline-flex items-center justify-center px-6 py-3 border border-laysun-green text-laysun-green rounded-button font-medium hover:bg-laysun-green hover:text-white transition-colors"
                      >
                        Explore Systems
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-heading font-semibold text-laysun-dark mb-6">
                      Project Inquiry Form
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">
                            Company Name <span className="text-red-500">*</span>
                          </Label>
                          <Input id="companyName" required placeholder="Your company name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactName">
                            Contact Name <span className="text-red-500">*</span>
                          </Label>
                          <Input id="contactName" required placeholder="Your full name" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input id="email" type="email" required placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="+1 234 567 8900" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="country">
                            Country <span className="text-red-500">*</span>
                          </Label>
                          <Input id="country" required placeholder="Your country" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range.value} value={range.value}>
                                  {range.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline.value} value={timeline.value}>
                                  {timeline.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Please describe your project requirements, including location, scale, and any specific needs..."
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm font-normal leading-relaxed">
                          I have read and agree to the{' '}
                          <Link to="/privacy-policy" className="text-laysun-green hover:underline">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link to="/terms-of-service" className="text-laysun-green hover:underline">
                            Terms of Service
                          </Link>
                          . I consent to being contacted regarding my inquiry.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-laysun-green hover:bg-laysun-green-light text-white py-6"
                      >
                        Submit Project Inquiry
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-heading font-semibold text-laysun-dark mb-4">
                  Direct Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-laysun-gold mt-0.5 mr-3" />
                    <div>
                      <p className="text-sm text-laysun-gray">General Inquiries</p>
                      <a
                        href="mailto:info@laysun.co"
                        className="text-laysun-dark hover:text-laysun-green transition-colors"
                      >
                        info@laysun.co
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-laysun-gold mt-0.5 mr-3" />
                    <div>
                      <p className="text-sm text-laysun-gray">Sales</p>
                      <a
                        href="mailto:sales@laysun.co"
                        className="text-laysun-dark hover:text-laysun-green transition-colors"
                      >
                        sales@laysun.co
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-laysun-gold mt-0.5 mr-3" />
                    <div>
                      <p className="text-sm text-laysun-gray">WhatsApp</p>
                      <a
                        href="https://wa.me/12138298485"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-laysun-dark hover:text-laysun-green transition-colors"
                      >
                        +1 213-829-8485
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-laysun-green rounded-2xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-laysun-gold mr-2" />
                  <h4 className="font-heading font-semibold">Response Time</h4>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Our engineering team commits to responding within 12 hours for qualified
                  commercial inquiries.
                </p>
                <div className="flex items-center text-laysun-gold text-sm">
                  <Check className="w-4 h-4 mr-2" />
                  <span>12-hour response guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section ref={officeRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Global Offices"
            subtitle="Connect with our team in your region"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* US Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOfficeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="bg-laysun-gray-light rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-laysun-green/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-laysun-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-laysun-dark">
                    {offices.us.title}
                  </h3>
                  <p className="text-sm text-laysun-gray">{offices.us.purpose}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(offices.us.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.us.address}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`tel:${offices.us.phone.replace(/\s/g, '')}`}
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.us.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`mailto:${offices.us.email}`}
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.us.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${offices.us.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.us.whatsapp}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <span className="text-laysun-dark">
                    {offices.us.hours} ({offices.us.timezone})
                  </span>
                </div>
              </div>
            </motion.div>

            {/* China Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOfficeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-laysun-gray-light rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-laysun-green/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-laysun-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-laysun-dark">
                    {offices.cn.title}
                  </h3>
                  <p className="text-sm text-laysun-gray">{offices.cn.purpose}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(offices.cn.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.cn.address}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`tel:${offices.cn.phone.replace(/\s/g, '')}`}
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.cn.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`mailto:${offices.cn.email}`}
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.cn.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${offices.cn.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-laysun-dark hover:text-laysun-green transition-colors"
                  >
                    {offices.cn.whatsapp}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-laysun-gold mr-3 flex-shrink-0" />
                  <span className="text-laysun-dark">
                    {offices.cn.hours} ({offices.cn.timezone})
                  </span>
                </div>
                {offices.cn.airportInfo && (
                  <div className="flex items-start">
                    <Plane className="w-5 h-5 text-laysun-gold mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-laysun-gray text-sm">{offices.cn.airportInfo}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Reinforcement */}
      <section className="section-padding bg-laysun-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-h3 font-heading font-bold text-laysun-dark mb-8">
              Why Work With LAYSUN
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                '12-hour engineering response',
                'Confidential project evaluation',
                'Structured proposal process',
                'Commercial-grade documentation',
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-laysun-green/10 rounded-full flex items-center justify-center mb-3">
                    <Check className="w-5 h-5 text-laysun-green" />
                  </div>
                  <span className="text-sm text-laysun-dark">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
