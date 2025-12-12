import type { Metadata } from 'next';
import Link from 'next/link';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: 'Diskar-Tech',
  description: 'Comprehensive overview of the Diskar-Tech system development project, including status, team members, and documentation.',
};

export default function SystemOverviewPage() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Diskar-Tech
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track our system development progress, team collaboration, and project milestones.
          </p>
        </div>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMemberCard
              name="Hadjara A. Salem"
              role="Project Manager"
              description="Manages workflow, documentation, and client communication. Ensures project milestones are met on time."
              avatar="/profile.png"
            />
            <TeamMemberCard
              name="Harra Lou"
              role="Front-end Developer"
              description="Designs and implements user interfaces and system layouts. Focuses on creating intuitive user experiences."
              avatar="/profile.png"
            />
            <TeamMemberCard
              name="Helman Dacuma"
              role="Back-end Developer"
              description="Develops system architecture and database integration. Handles server-side logic and API development."
              avatar="/profile.png"
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">System Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-md">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Software Requirements Specification (SRS)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Complete system requirements and specifications document.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                View Document →
              </a>
            </div>
          </div>
        </section>

        {/* Communication Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Team Communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">MS Teams</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Primary team communication channel for meetings and discussions.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Join Team →
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Discord</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Real-time chat and collaboration for quick updates and coordination.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Join Server →
              </a>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Trello</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Project management board for tracking tasks and milestones.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                View Board →
              </a>
            </div>
          </div>
        </section>

        {/* Back to Dashboard */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
