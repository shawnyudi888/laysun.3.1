// 项目/产品
export interface Project {
  // 基础信息
  status: 'published' | 'draft' | 'archived';
  publishDate: string;
  title: string;
  slug: string;
  category: string;
  
  // 媒体
  coverImage: string;
  heroImage?: string;
  gallery?: string[];
  videoUrl?: string;
  
  // 内容
  summary: string;
  description: string;
  
  // 特点
  features?: {
    icon?: string;
    title: string;
    description: string;
  }[];
  
  // 规格
  specifications?: {
    key: string;
    value: string;
    unit?: string;
  }[];
  
  // 关联
  relatedProjects?: string[];
  tags?: string[];
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

// 分类
export interface Category {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
  order: number;
}

// 页面
export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
    ctaLink: string;
  };
  featuredProjects: string[];
  about: {
    title: string;
    content: string;
    image: string;
  };
}

// 站点设置
export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: string;
  favicon?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  footer: {
    copyright: string;
    links: string;
  };
}
