'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  featured?: boolean;
}

export default function ProjectCard({ title, description, technologies, link, featured = false }: ProjectCardProps) {
  const content = (
    <div className="project-card group relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 p-8 h-full flex flex-col overflow-hidden cursor-pointer">
      {/* Border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      {/* Project Thumbnail/Icon Area */}
      <div className="mb-6 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 transition-opacity duration-300"></div>
        <div className="relative z-10 text-5xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
          {featured ? '🖥️' : '💻'}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
        {/* Project Icon */}
        {title.toLowerCase().includes('jeepney') || title.toLowerCase().includes('e-jeepney') ? (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ) : title.toLowerCase().includes('crm') || title.toLowerCase().includes('sales') ? (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ) : null}
        <span>{title}</span>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => {
            // Tech icon mapping
            const techIcons: Record<string, string> = {
              'Android': '🤖',
              'UI/UX Design': '🎨',
              'Mobile Development': '📱',
              'Excel': '📊',
              'CRM': '💼',
              'Data Management': '🗄️',
              'Prototyping': '⚡',
              'Figma': '🎭',
              'HTML': '🌐',
              'CSS': '💅',
              'PHP': '🐘',
              'Front-end': '💻',
            };
            
            const icon = techIcons[tech] || '⚙️';
            
            return (
              <span
                key={index}
                className="tech-tag px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800 inline-flex items-center gap-1.5 transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-105 cursor-default"
              >
                <span className="text-xs">{icon}</span>
                <span>{tech}</span>
              </span>
            );
          })}
        </div>
      )}
      
      {/* View Button */}
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            View Project
          </span>
          <span className="text-blue-600 dark:text-blue-400 text-lg group-hover:translate-x-1 transition-transform duration-300">
            →
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

