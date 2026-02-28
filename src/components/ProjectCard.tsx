import { Link } from 'react-router-dom';
import { MapPin, BadgeCheck } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="card group block">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Scalable Badge */}
        {project.scalable && (
          <div className="absolute top-3 right-3 bg-laysun-gold text-white text-xs font-medium px-2 py-1 rounded flex items-center space-x-1">
            <BadgeCheck className="w-3 h-3" />
            <span>Scalable</span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        {/* Industry Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-laysun-gold uppercase tracking-wider">
            {project.industry}
          </span>
          {project.clientType && (
            <span className="text-xs text-laysun-gray bg-laysun-gray-light px-2 py-0.5 rounded">
              {project.clientType}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-heading font-semibold text-laysun-dark mb-2 group-hover:text-laysun-green transition-colors line-clamp-2">
          {project.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-sm text-laysun-gray">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{project.location}, {project.country}</span>
        </div>
        
        {/* Excerpt */}
        <p className="text-sm text-laysun-gray mt-3 line-clamp-2">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
}
