import type { Project, Product, KPIItem, NavItem, OfficeInfo, SocialLinks } from '@/types';

export const companyInfo = {
  name: 'Laysun Co-Creation (Guangzhou) Technology Co., Ltd.',
  shortName: 'LAYSUN',
  tagline: 'Engineering Artificial Horticulture Systems For Global Developers',
  description: 'Global Artificial Horticulture Systems Provider',
  email: {
    primary: 'info@laysun.co',
    sales: 'sales@laysun.co',
  },
  footerDescription: 'LAYSUN is a manufacturing-backed engineering platform providing scalable artificial horticulture systems for commercial developers and hotel groups worldwide.',
};

export const navigation: NavItem[] = [
  { label: 'Systems', href: '/systems' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const megaMenu: NavItem[] = [
  { label: 'Solutions', href: '/systems' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Procurement', href: '/procurement' },
];

export const socialLinks: SocialLinks = {
  facebook: 'https://facebook.com/laysun',
  linkedin: 'https://linkedin.com/company/laysun',
  tiktok: 'https://tiktok.com/@laysun',
  instagram: 'https://instagram.com/laysun',
  youtube: 'https://youtube.com/laysun',
};

export const offices: { us: OfficeInfo; cn: OfficeInfo } = {
  us: {
    title: 'North America Wholesale Inquiries',
    purpose: 'For North America Wholesale Inquiries',
    address: '20 Transom Rd, Port Wentworth, Georgia, 31407, United States',
    phone: '+1 213-829-8485',
    email: 'info@laysun.co',
    whatsapp: '+1 213-829-8485',
    hours: '9:00-18:00',
    timezone: 'PST / UTC-8',
  },
  cn: {
    title: 'Custom Project & Factory Direct Communication',
    purpose: 'For Custom Project & Factory Direct Communication',
    address: 'No. 25 Qiaofeng Road, Qishi Town, Dongguan City, Guangdong Province, China',
    phone: '+86 138-0250-5260',
    email: 'sales@laysun.co',
    whatsapp: '+86 138-0250-5260',
    hours: '9:00-18:00',
    timezone: 'CST / UTC+8',
    airportInfo: '距深圳宝安国际机场1.5小时车程，距广州白云国际机场1.5小时车程',
  },
};

export const homeKPIs: KPIItem[] = [
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 80000, suffix: '㎡', label: 'Production Facility' },
  { number: 120, suffix: '+', label: 'Global Projects' },
  { number: 30, suffix: '+', label: 'Countries Served' },
];

export const engineeringApproach = [
  {
    icon: 'Settings',
    title: 'System Engineering',
    description: 'Integrated system design combining structural engineering, material science, and manufacturing precision for scalable deployment.',
  },
  {
    icon: 'Shield',
    title: 'Material Standardization',
    description: 'Fire-rated, UV-resistant materials meeting international safety standards for commercial environments.',
  },
  {
    icon: 'Globe',
    title: 'Scalable Deployment',
    description: 'Multi-city rollout capability with consistent quality, standardized processes, and global logistics coordination.',
  },
];

export const manufacturingCapabilities = [
  'In-house mold development and tooling',
  'Automated production lines for consistent quality',
  'Material testing laboratory with fire and UV testing',
  'Quality control at every production stage',
  'Global logistics and container loading coordination',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dubai Luxury Hotel Atrium',
    location: 'Dubai',
    country: 'UAE',
    industry: 'Hospitality',
    clientType: 'Hotel Group',
    scalable: true,
    image: '/images/project-dubai.jpg',
    excerpt: 'Integrated multi-level artificial palm tree system for 5-star hotel atrium.',
    slug: 'dubai-luxury-hotel',
  },
  {
    id: '2',
    title: 'Corporate HQ Green Wall',
    location: 'Singapore',
    country: 'Singapore',
    industry: 'Corporate Office',
    scalable: false,
    image: '/images/project-office.jpg',
    excerpt: 'Vertical green system installation for technology company headquarters.',
    slug: 'singapore-corporate-hq',
  },
  {
    id: '3',
    title: 'Luxury Retail Flagship',
    location: 'Milan',
    country: 'Italy',
    industry: 'Retail',
    scalable: true,
    image: '/images/project-retail.jpg',
    excerpt: 'Artificial olive trees for high-end fashion boutique chain.',
    slug: 'milan-retail-flagship',
  },
  {
    id: '4',
    title: 'Public Library Atrium',
    location: 'Sydney',
    country: 'Australia',
    industry: 'Public Space',
    scalable: false,
    image: '/images/project-public.jpg',
    excerpt: 'Large-scale artificial ficus trees for civic space renovation.',
    slug: 'sydney-public-library',
  },
  {
    id: '5',
    title: 'Five-Star Hotel Lobby',
    location: 'Los Angeles',
    country: 'USA',
    industry: 'Hospitality',
    clientType: 'Hotel Group',
    scalable: true,
    image: '/images/project-hotel.jpg',
    excerpt: 'Premium artificial olive trees for luxury hotel group rollout.',
    slug: 'la-hotel-lobby',
  },
  {
    id: '6',
    title: 'Shopping Mall Renovation',
    location: 'Doha',
    country: 'Qatar',
    industry: 'Commercial Complex',
    scalable: true,
    image: '/images/projects-hero.jpg',
    excerpt: 'Multi-level artificial tree structures for retail environment.',
    slug: 'doha-mall-renovation',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Multi-Stem Olive Tree',
    category: 'Artificial Trees',
    image: '/images/product-olive-tree.jpg',
    shortDescription: 'Height: 2.5-4m | UV-resistant | Fire-rated available',
    moq: '50 units',
    leadTime: '30-45 days',
    slug: 'multi-stem-olive-tree',
  },
  {
    id: '2',
    name: 'Premium Ficus Tree',
    category: 'Artificial Trees',
    image: '/images/product-olive-tree.jpg',
    shortDescription: 'Height: 3-6m | Indoor/Outdoor | Custom trunk options',
    moq: '30 units',
    leadTime: '45-60 days',
    slug: 'premium-ficus-tree',
  },
  {
    id: '3',
    name: 'Vertical Green Wall System',
    category: 'Vertical Green Systems',
    image: '/images/project-office.jpg',
    shortDescription: 'Modular panels | 50+ plant varieties | Easy installation',
    moq: '100 sqm',
    leadTime: '30 days',
    slug: 'vertical-green-wall',
  },
  {
    id: '4',
    name: 'Artificial Palm Tree',
    category: 'Artificial Trees',
    image: '/images/project-dubai.jpg',
    shortDescription: 'Height: 4-8m | Date/Arecca styles | Structural base',
    moq: '20 units',
    leadTime: '60 days',
    slug: 'artificial-palm-tree',
  },
  {
    id: '5',
    name: 'Monstera Plant',
    category: 'Artificial Plants',
    image: '/images/product-olive-tree.jpg',
    shortDescription: 'Height: 1-1.5m | Potted | Real-touch leaves',
    moq: '100 units',
    leadTime: '21 days',
    slug: 'monstera-plant',
  },
  {
    id: '6',
    name: 'Custom Structural Components',
    category: 'Custom Components',
    image: '/images/case-studies-hero.jpg',
    shortDescription: 'Steel frames | Mounting systems | Engineering support',
    moq: 'Project based',
    leadTime: 'Custom quote',
    slug: 'custom-structural-components',
  },
];

export const industries = [
  'All',
  'Hospitality',
  'Retail',
  'Commercial Complex',
  'Public Space',
  'Corporate Office',
  'Hotel Group',
];

export const productCategories = [
  'All',
  'Artificial Trees',
  'Artificial Plants',
  'Vertical Green Systems',
  'Custom Components',
];

export const projectTypes = [
  { value: '', label: 'Select Project Type' },
  { value: 'Hotel Group', label: 'Hotel Group' },
  { value: 'Commercial Developer', label: 'Commercial Developer' },
  { value: 'Retail Chain', label: 'Retail Chain' },
  { value: 'Design Firm', label: 'Design Firm' },
  { value: 'Other', label: 'Other' },
];

export const budgetRanges = [
  { value: '', label: 'Select Budget Range' },
  { value: '< 50,000', label: 'Under $50,000' },
  { value: '50,000 - 100,000', label: '$50,000 - $100,000' },
  { value: '100,000 - 500,000', label: '$100,000 - $500,000' },
  { value: '> 500,000', label: 'Over $500,000' },
];

export const timelines = [
  { value: '', label: 'Select Timeline' },
  { value: '< 3 Months', label: 'Less than 3 Months' },
  { value: '3-6 Months', label: '3-6 Months' },
  { value: '6-12 Months', label: '6-12 Months' },
  { value: '> 12 Months', label: 'Over 12 Months' },
];

export const moqTable = [
  { category: 'Artificial Trees', moq: '50 units', leadTime: '30-45 days' },
  { category: 'Artificial Plants', moq: '100 units', leadTime: '21-30 days' },
  { category: 'Vertical Green Systems', moq: '100 sqm', leadTime: '30 days' },
  { category: 'Custom Components', moq: 'Project based', leadTime: 'Custom quote' },
];

export const faqItems = [
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'Our MOQ varies by product category. Artificial trees typically require 50 units, plants 100 units, and vertical green systems 100 square meters. Custom projects are evaluated on a case-by-case basis.',
  },
  {
    question: 'Do you support private label and customization?',
    answer: 'Yes, we offer comprehensive private label services including custom packaging, branding, and product modifications. Our engineering team can also develop custom molds for unique project requirements.',
  },
  {
    question: 'What are your fire safety and compliance standards?',
    answer: 'Our products meet international fire safety standards including ASTM E84, BS 476, and EN 13501. We provide full certification documentation for commercial projects.',
  },
  {
    question: 'How do you handle multi-city rollouts?',
    answer: 'We have extensive experience with multi-city deployments for hotel groups and retail chains. Our system approach ensures consistent quality, standardized installation, and coordinated logistics across all locations.',
  },
  {
    question: 'What is your typical lead time?',
    answer: 'Standard lead times range from 21-60 days depending on product complexity and order volume. For large multi-city projects, we develop phased production schedules to align with your rollout timeline.',
  },
  {
    question: 'Do you provide installation support?',
    answer: 'Yes, we offer comprehensive installation support including technical documentation, video guides, and on-site supervision for complex projects. Our engineering team ensures proper structural integration.',
  },
];

export const qualityControlSteps = [
  { number: 1, title: 'Raw Material Inspection', description: 'All materials tested for UV resistance, fire rating, and durability before production.' },
  { number: 2, title: 'In-Process Monitoring', description: 'Quality checks at every production stage to ensure consistency.' },
  { number: 3, title: 'Mid-Production Inspection', description: 'Detailed inspection of semi-finished products for dimensional accuracy.' },
  { number: 4, title: 'Structural Testing', description: 'Load testing and structural integrity verification for large installations.' },
  { number: 5, title: 'Final Inspection', description: 'Comprehensive quality check before packaging and shipment.' },
];

export const systemArchitectureSteps = [
  { number: 1, title: 'Space Analysis', description: 'Site assessment and structural requirements evaluation.' },
  { number: 2, title: 'System Design', description: 'Custom engineering solution with material specifications.' },
  { number: 3, title: 'Manufacturing', description: 'Precision production with quality control at every stage.' },
  { number: 4, title: 'Logistics', description: 'Global shipping coordination and customs documentation.' },
  { number: 5, title: 'Installation', description: 'Professional deployment with structural integration support.' },
];
