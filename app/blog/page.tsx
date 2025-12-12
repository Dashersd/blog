import type { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

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

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt || post.content.substring(0, 150) + '...'}
                date={post.date}
                slug={post.slug}
                aosDelay={index * 150}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No blog posts yet
            </h2>
            <p className="text-gray-600">
              Blog posts will appear here once they are added to the content/blog directory.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

