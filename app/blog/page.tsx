import type { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import BlogList from '@/components/BlogList';

// Ensure the list reflects deletes immediately
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog - Helman Dacuma',
  description: 'Blog posts including my OJT Journey at NCIP and other experiences as a BSIT student.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-heading tracking-tight">
            Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto font-normal">
            Including my OJT Journey at NCIP and other experiences
          </p>
        </div>

        {/* Blog Posts with Sorting */}
        <BlogList posts={posts} />
      </div>
    </div>
  );
}

