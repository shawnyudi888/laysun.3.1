import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { companyInfo, navigation, socialLinks } from '@/data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-laysun-green text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold">
                {companyInfo.shortName}
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {companyInfo.footerDescription}
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-laysun-gold transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-laysun-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-laysun-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-laysun-gold transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-laysun-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-white/70 hover:text-laysun-gold transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-white/70 hover:text-laysun-gold transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/procurement"
                  className="text-white/70 hover:text-laysun-gold transition-colors text-sm"
                >
                  Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white/50 block mb-1">General Inquiries</span>
                <a
                  href={`mailto:${companyInfo.email.primary}`}
                  className="text-white/70 hover:text-laysun-gold transition-colors"
                >
                  {companyInfo.email.primary}
                </a>
              </li>
              <li>
                <span className="text-white/50 block mb-1">Sales</span>
                <a
                  href={`mailto:${companyInfo.email.sales}`}
                  className="text-white/70 hover:text-laysun-gold transition-colors"
                >
                  {companyInfo.email.sales}
                </a>
              </li>
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-laysun-gold text-white px-6 py-2.5 rounded-button font-medium hover:bg-laysun-gold-light transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-white/50 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-white/50 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
