'use client';

import { useState, useMemo } from 'react';
import BlogCard from '@/components/BlogCard';
import BlogSort from '@/components/BlogSort';
import type { BlogPost } from '@/lib/blog';

type SortOrder = 'newest' | 'oldest';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const sortedPosts = useMemo(() => {
    const sorted = [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      // Handle invalid dates by putting them at the end
      if (isNaN(dateA) && isNaN(dateB)) return 0;
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      
      if (sortOrder === 'newest') {
        // Sort in descending order (newest first)
        return dateB - dateA;
      } else {
        // Sort in ascending order (oldest first)
        return dateA - dateB;
      }
    });
    
    return sorted;
  }, [posts, sortOrder]);

  return (
    <>
      <BlogSort onSortChange={setSortOrder} currentSort={sortOrder} />
      
      {sortedPosts.length > 0 ? (
        <div className="space-y-8">
          {sortedPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt || post.content.substring(0, 150) + '...'}
              date={post.date}
              dateEnd={post.dateEnd}
              slug={post.slug}
              aosDelay={index * 150}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-12 border border-gray-200 dark:border-slate-700 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            No blog posts yet
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Blog posts will appear here once they are added to the content/blog directory.
          </p>
        </div>
      )}
    </>
  );
}
