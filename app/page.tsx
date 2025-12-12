import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TypewriterText from '@/components/TypewriterText';
import TechMarquee from '@/components/TechMarquee';
import TeamMemberCard from '@/components/TeamMemberCard';

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
          
          {/* Avatar */}
          <div className="mb-8 flex justify-center relative z-10">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden avatar-glow bg-transparent">
              <Image
                src="/Profile_2.png"
                alt="Diskar-Tech Team"
                fill
                className="object-cover rounded-full"
                style={{ 
                  objectPosition: 'center 40%',
                  transform: 'none'
                }}
                priority
              />
            </div>
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

        {/* Dashboard Cards - 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            avatar="/Profile_2.png"
          />

          {/* System Documentation Card */}
          <Link
            href="#"
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer"
          >
            <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              System Documentation
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Links to SRS, ERD, and system files
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
              View Documents <span className="ml-2">→</span>
            </div>
          </Link>

          {/* Group Contact/Log Card */}
          <Link
            href="#"
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer"
          >
            <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Group Contact & Logs
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Team communication channels: MS Teams, Discord, Trello
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
              Connect <span className="ml-2">→</span>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}

