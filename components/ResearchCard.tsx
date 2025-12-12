'use client';

import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

export default function ResearchCard({ 
  title, 
  description, 
  icon = '📚',
  link,
  featured = false,
  size = 'medium'
}: ResearchCardProps) {
  const content = (
    <div className={`
      group relative 
      bg-white dark:bg-slate-800 
      rounded-2xl 
      border border-gray-200 dark:border-slate-700 
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.06)] 
      hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] 
      hover:-translate-y-2 
      hover:border-blue-300 dark:hover:border-blue-600 
      transition-all duration-300 
      p-6 md:p-8 
      h-full 
      flex flex-col 
      overflow-hidden 
      cursor-pointer
      research-card
    `}>
      {/* Border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      {/* Icon/Thumbnail Area with Image Zoom effect */}
      <div className="mb-4 md:mb-6 h-24 md:h-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 transition-opacity duration-300"></div>
        <div className="relative z-10 text-4xl md:text-5xl opacity-20 group-hover:opacity-30 research-icon transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Title with expressive typography */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-heading">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-sm md:text-base">
        {description}
      </p>
      
      {/* Call-to-Action Reveal */}
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
        <div className="flex items-center justify-between research-cta opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            {link ? 'View Details' : 'Coming Soon'}
          </span>
          <span className="text-blue-600 dark:text-blue-400 text-lg group-hover:translate-x-1 transition-transform duration-300">
            {link ? '→' : '⋯'}
          </span>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
