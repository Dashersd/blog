'use client';

import Link from 'next/link';
import { useCallback, useState, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

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

export default function BlogCard({ title, excerpt, date, slug, aosDelay = 0 }: BlogCardProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
        
        <div className="flex items-center justify-between">
          {/* Accent colored Read more link */}
          <div className="text-accent-blue dark:text-accent-blue-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-200 font-semibold text-sm inline-flex items-center gap-1 transition-all duration-300">
            Read more <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
          </div>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
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

