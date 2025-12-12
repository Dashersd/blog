import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me - Helman Dacuma',
  description: 'Hello! I\'m Helman Dashelle M. Dacuma, a BSIT student passionate about technology, creativity, and building practical digital solutions.',
};

export default function AboutPage() {
  const skills = [
    {
      category: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces',
      technologies: null,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      category: 'Front-end Development',
      description: 'Creating responsive and interactive web interfaces',
      technologies: 'HTML, CSS, basic Java, PHP, C#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      category: 'System Prototyping & Layout Structuring',
      description: 'Designing and structuring system architectures',
      technologies: null,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
    },
    {
      category: 'Basic Back-end',
      description: 'Database management and server-side operations',
      technologies: 'MySQL',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-gray-900 dark:text-gray-100">Helman Dashelle M. Dacuma</span>, a BSIT student passionate about technology, creativity, and building practical digital solutions.
          </p>
          {/* OJT Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            <span>📚</span>
            <span>Currently completing OJT at NCIP</span>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">I specialize in:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-[#E2E8F0] dark:border-slate-700 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{skill.description}</p>
                    {skill.technologies && (
                      <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mt-2">
                        {skill.technologies}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Role */}
        <section className="mb-12 bg-gray-50 dark:bg-slate-800 rounded-lg p-8 border border-gray-200 dark:border-slate-700 relative">
          <div className="absolute top-4 right-4 text-blue-600 dark:text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Current Role</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am currently completing my <span className="font-semibold">On-the-Job Training at the National Commission on Indigenous Peoples (NCIP)</span>, where I contribute to system documentation, digital processing, and office productivity improvements. This experience has strengthened my technical skills, work ethic, and ability to collaborate in a professional environment.
          </p>
        </section>

        {/* Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Goal</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My goal is to become a versatile IT professional who can turn ideas into functional and user-friendly systems.
          </p>
          <blockquote className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 py-4 italic text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto">
            <p className="text-lg">
              Outside of coding, I enjoy designing interfaces, exploring new tools, and constantly improving my craft.
            </p>
          </blockquote>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View My Projects
          </Link>
        </section>
      </div>
    </div>
  );
}

