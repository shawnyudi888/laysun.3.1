import { Link } from 'react-router-dom';
import type { Project } from '@/types/content';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <Link to={`/projects/${project.slug}`} className="block">
        {/* 封面图 */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        {/* 内容 */}
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full mb-3">
            {project.category}
          </span>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {project.summary}
          </p>
          
          <div className="mt-4 flex items-center text-emerald-600 font-medium text-sm">
            Learn more
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
