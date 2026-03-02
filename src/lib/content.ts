import type { Project, Category, HomePage, SiteSettings } from '@/types/content';

// 获取所有项目
export async function getAllProjects(): Promise<Project[]> {
  const modules = import.meta.glob('/src/content/projects/*.md', { eager: true });
  
  return Object.entries(modules)
    .map(([path, module]: [string, any]) => ({
      ...module.frontmatter,
      description: module.default?.rendered || module.frontmatter.description,
      slug: path.replace('/src/content/projects/', '').replace('.md', ''),
    }))
    .filter((p: Project) => p.status === 'published')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

// 获取单个项目
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const module = await import(`/src/content/projects/${slug}.md`);
    return {
      ...module.frontmatter,
      description: module.default?.rendered || module.frontmatter.description,
      slug,
    };
  } catch {
    return null;
  }
}

// 按分类获取项目
export async function getProjectsByCategory(categorySlug: string): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter(p => p.category === categorySlug);
}

// 获取所有分类
export async function getAllCategories(): Promise<Category[]> {
  const modules = import.meta.glob('/src/content/categories/*.md', { eager: true });
  
  return Object.values(modules)
    .map((module: any) => module.frontmatter as Category)
    .sort((a, b) => a.order - b.order);
}

// 获取首页数据
export async function getHomePage(): Promise<HomePage> {
  const data = await import('@/content/pages/home.json');
  return data.default;
}

// 获取站点设置
export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await import('@/content/settings/site.json');
  return data.default;
}
