'use client';

import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  aosDelay?: number;
}

const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-600 dark:text-gray-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M8 3.5h5.5L18 8v12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 017 20V5A1.5 1.5 0 018.5 3.5z" />
    <path d="M13.5 3.5V8H18" />
    <path d="M9.5 12.5h5M9.5 15.5h5" strokeLinecap="round" />
  </svg>
);

export default function BlogCard({ title, excerpt, date, slug, aosDelay = 0 }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="block blog-card-link"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <article className="group bg-white dark:bg-slate-800 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2)] transition-all duration-300 p-6 h-full border border-gray-200 dark:border-slate-700">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30 flex items-center justify-center">
            <DocumentIcon />
          </div>
          
          {/* Title and Date */}
          <div className="flex-1 flex justify-between items-start gap-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors duration-300">
              {title}
            </h3>
            {/* Prominent Date Block */}
            <time className="flex-shrink-0 px-4 py-1.5 bg-accent-blue text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-sm">
              {formattedDate}
            </time>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed clamp-3">{excerpt}</p>
        
        {/* Accent colored Read more link */}
        <div className="text-accent-blue dark:text-accent-blue-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-200 font-semibold text-sm inline-flex items-center gap-1 transition-all duration-300">
          Read more <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
        </div>
      </article>
    </Link>
  );
}

