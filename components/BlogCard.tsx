'use client';

import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`} className="block blog-card-link">
      <article className="group bg-white dark:bg-slate-800 rounded-lg shadow-md transition-all duration-300 p-6 h-full border border-gray-200 dark:border-slate-700">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30 flex items-center justify-center text-xl">
            📝
          </div>
          
          {/* Title and Date */}
          <div className="flex-1 flex justify-between items-start gap-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
              {title}
            </h3>
            {/* Prominent Date Block */}
            <time className="flex-shrink-0 px-3 py-1.5 bg-accent-500 text-white text-xs font-semibold rounded-md whitespace-nowrap shadow-sm">
              {formattedDate}
            </time>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{excerpt}</p>
        
        {/* Accent colored Read more link */}
        <div className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
          Read more <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </article>
    </Link>
  );
}

