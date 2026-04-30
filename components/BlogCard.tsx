'use client';

import Link from 'next/link';
import { useCallback, useState, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { formatDateRange } from '@/lib/dateUtils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  dateEnd?: string;
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

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M6.5 7.5h11" />
    <path d="M10 10.5v6" />
    <path d="M14 10.5v6" />
    <path d="M9 7.5V6.25A1.25 1.25 0 0110.25 5h3.5A1.25 1.25 0 0115 6.25V7.5" />
    <path d="M7.5 7.5l.6 9.02A1.5 1.5 0 009.59 18h4.82a1.5 1.5 0 001.49-1.48l.6-9.02" />
  </svg>
);

export default function BlogCard({ title, excerpt, date, dateEnd, slug, aosDelay = 0 }: BlogCardProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const formattedDate = formatDateRange(date, dateEnd);

  const handleDelete = useCallback(
    async (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (isDeleting) return;

      const confirmed = window.confirm(`Delete "${title}"? This cannot be undone.`);
      if (!confirmed) return;

      setIsDeleting(true);
      try {
        const res = await fetch(`/api/blog/${slug}`, { method: 'DELETE' });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to delete post');
        }
        router.refresh();
      } catch (error) {
        console.error(error);
        alert('Failed to delete post. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    },
    [isDeleting, router, slug, title]
  );

  return (
    <Link
      href={`/blog/${slug}`}
      className="block blog-card-link"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <article className="group rounded-lg transition-all duration-300 p-6 h-full
        /* Glassmorphism Effect */
        bg-white/5 dark:bg-black/20
        backdrop-blur-md
        border border-white/10 dark:border-white/18
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
        hover:border-white/25 dark:hover:border-blue-400/40">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm flex items-center justify-center border border-white/20 dark:border-white/30">
            <DocumentIcon />
          </div>
          
          {/* Title and Date */}
          <div className="flex-1 flex justify-between items-start gap-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white group-hover:text-accent-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            {/* Prominent Date Block */}
            <time className="flex-shrink-0 px-4 py-1.5 bg-blue-500/90 dark:bg-blue-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-lg border border-white/20">
              {formattedDate}
            </time>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          {/* Accent colored Read more link */}
          <div className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1 transition-all duration-300">
            Read more <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
          </div>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-300/50 dark:border-red-400/50 text-red-600 dark:text-red-400 bg-red-50/80 dark:bg-red-900/30 backdrop-blur-sm hover:bg-red-100/90 dark:hover:bg-red-900/50 transition disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="Delete post"
          >
            <TrashIcon />
            {isDeleting ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </article>
    </Link>
  );
}

