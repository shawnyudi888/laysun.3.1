export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  industry: string;
  clientType?: string;
  scalable: boolean;
  image: string;
  excerpt: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  moq?: string;
  leadTime?: string;
  slug: string;
}

export interface KPIItem {
  number: number;
  suffix: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface OfficeInfo {
  title: string;
  purpose: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  timezone: string;
  airportInfo?: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
}

export interface ContactFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  multiCityRequirement: boolean;
  numberOfLocations: number;
  productInterest: string[];
  quantity: string;
  message: string;
  consentGiven: boolean;
}
