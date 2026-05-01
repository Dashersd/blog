import type { Metadata } from 'next';
import ResearchGrid from '@/components/ResearchGrid';

export const metadata: Metadata = {
  title: 'Research - Helman Dacuma',
  description: 'Research and documentation for D’Marsians: Web-Based Admission and Progress Tracking with Real-Time Visualization System.',
};

export default function ResearchPage() {
  const researchItems = [
    {
      title: 'D’Marsians: Web-Based Admission and Progress Tracking with Real-Time Visualization System',
      description: 'Comprehensive research and technical documentation for our Capstone Project. This study focuses on optimizing student admission workflows and implementing real-time data visualization for progress tracking.',
      icon: '🚀',
      size: 'wide' as const,
      featured: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with Expressive Typography */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-heading tracking-tight">
            Research
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Capstone Project Research & Documentation
          </p>
        </div>

        {/* Bento Grid Layout */}
        <ResearchGrid items={researchItems} />

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            More research content coming soon.{' '}
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline underline-offset-4 transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

