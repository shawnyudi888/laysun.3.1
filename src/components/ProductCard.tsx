import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-laysun-dark text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        {/* Product Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-heading font-semibold text-white mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-white/80 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>
      
      <div className="p-5 bg-white">
        {/* MOQ & Lead Time */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div>
            <span className="text-laysun-gray block text-xs">MOQ</span>
            <span className="text-laysun-dark font-medium">{product.moq || 'N/A'}</span>
          </div>
          <div className="text-right">
            <span className="text-laysun-gray block text-xs">Lead Time</span>
            <span className="text-laysun-dark font-medium">{product.leadTime || 'N/A'}</span>
          </div>
        </div>
        
        {/* CTA */}
        <Link
          to={`/products/${product.slug}`}
          className="flex items-center justify-center w-full py-2.5 border border-laysun-green text-laysun-green rounded-button font-medium text-sm hover:bg-laysun-green hover:text-white transition-all duration-300 group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
