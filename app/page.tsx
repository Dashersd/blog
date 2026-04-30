import Link from 'next/link';
import type { Metadata } from 'next';
import TypewriterText from '@/components/TypewriterText';
import TechMarquee from '@/components/TechMarquee';
import TeamMemberCard from '@/components/TeamMemberCard';
import { getSortedPostsData } from '@/lib/blog';
import { formatDateRange } from '@/lib/dateUtils';

export const metadata: Metadata = {
  title: 'Dashboard - Helman Dacuma Portfolio',
  description: 'Welcome to my personal IT Dashboard — a space where you can explore my journey, my work, and the projects that shaped my growth as a BSIT student.',
};

export default function Home() {
  const dashboardSections = [
    {
      title: 'About Me',
      description: 'Who I am, my background, and what I\'m passionate about',
      href: '/about',
      icon: '👤',
    },
    {
      title: 'Projects',
      description: 'The systems, designs, and solutions I\'ve built',
      href: '/projects',
      icon: '🖥️',
    },
    {
      title: 'Research',
      description: 'My academic works, case studies, and system documentation',
      href: '/research',
      icon: '📚',
    },
    {
      title: 'Blog Posts',
      description: 'Including my OJT Journey at NCIP',
      href: '/blog',
      icon: '📝',
    },
    {
      title: 'Contact',
      description: 'How to reach me for collaborations or opportunities',
      href: '/contact',
      icon: '📧',
    },
  ];

  // Get latest 2 blog posts
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 2);

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 hero-background overflow-hidden">
        {/* Radial Gradient Mesh Background */}
        <div className="absolute top-0 left-1/4 gradient-mesh gradient-mesh-blue -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 gradient-mesh gradient-mesh-purple translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative text-center">
          {/* Ambient Light Gradient */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/20 to-cyan-700/20 rounded-full blur-[100px]"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Diskar-Tech 
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4 relative z-10">
            I&apos;m <span className="font-semibold text-blue-700 dark:text-blue-300">Helman Dashelle M. Dacuma</span> a <TypewriterText 
              words={['Back-end Developer', 'BSIT Student']} 
              className="text-blue-600 dark:text-blue-400 font-semibold"
            />
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 relative z-10">
            Track our system development progress, team collaboration, and project documentation in one place.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              href="/system-overview"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Diskar-Tech Project
            </Link>
            <Link
              href="/cv.pdf"
              download="CV.pdf"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Download CV
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Dashboard Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Dashboard Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            This Dashboard contains everything we do. Track our system development progress, team collaboration, and project documentation in one place.
          </p>
        </div>

        {/* Dashboard Cards - Team Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member Card 1 - Hadjara */}
          <TeamMemberCard
            name="Hadjara A. Salem"
            role="Project Manager"
            description="Manages workflow, documentation, and client communication"
            avatar="/Hadjara.png"
          />

          {/* Team Member Card 2 - Harra Lou */}
          <TeamMemberCard
            name="Harra Lou"
            role="Front-end Developer"
            description="Designs and implements user interfaces and system layouts"
            avatar="/Harra.png"
          />

          {/* Team Member Card 3 - Helman */}
          <TeamMemberCard
            name="Helman Dacuma"
            role="Back-end Developer"
            description="Develops system architecture and database integration"
            avatar="/Profile 2.png"
          />

          {/* Team Member Card 4 - Jonel Sei Ebol */}
          <TeamMemberCard
            name="Mr. Jonel Sei Ebol"
            role="System Adviser"
            description="Provides strategic guidance and oversight for system development"
            avatar="/4.png"
          />
        </div>

        {/* Latest Blog Posts Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Stay updated with my latest experiences and OJT journey at NCIP
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Latest Blog Posts */}
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => {
              const formattedDate = formatDateRange(post.date, post.dateEnd);
              
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative p-6 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer flex flex-col
                    /* Glassmorphism Effect */
                    bg-white/5 dark:bg-black/20
                    backdrop-blur-md
                    border border-white/10 dark:border-white/18
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                    hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
                    hover:border-white/25 dark:hover:border-blue-400/40"
                >
                  <div className="h-12 w-12 bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 border border-white/20 dark:border-white/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 text-xs mb-2">
                    {formattedDate}
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt || post.content.substring(0, 100) + '...'}
                  </p>
                  <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Read more <span className="ml-2">→</span>
                  </div>
                </Link>
              );
            })
          ) : (
            <>
              {/* Placeholder if no blog posts */}
              <Link
                href="/blog"
                className="group relative p-6 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer
                  /* Glassmorphism Effect */
                  bg-white/5 dark:bg-black/20
                  backdrop-blur-md
                  border border-white/10 dark:border-white/18
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                  hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
                  hover:border-white/25 dark:hover:border-blue-400/40"
              >
                <div className="h-12 w-12 bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 border border-white/20 dark:border-white/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  View Blog Posts
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-4">
                  Check out my latest blog posts and OJT journey
                </p>
                <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  View Blog <span className="ml-2">→</span>
                </div>
              </Link>
              <Link
                href="/blog"
                className="group relative p-6 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer
                  /* Glassmorphism Effect */
                  bg-white/5 dark:bg-black/20
                  backdrop-blur-md
                  border border-white/10 dark:border-white/18
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                  hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
                  hover:border-white/25 dark:hover:border-blue-400/40"
              >
                <div className="h-12 w-12 bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 border border-white/20 dark:border-white/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  View All Posts
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-4">
                  Explore all my blog posts and experiences
                </p>
                <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  View All <span className="ml-2">→</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </section>

    </div>
  );
}

