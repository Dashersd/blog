import type { Metadata } from 'next';
import ResearchGrid from '@/components/ResearchGrid';

export const metadata: Metadata = {
  title: 'Research - Helman Dacuma',
  description: 'My academic works, case studies, and system documentation as a BSIT student.',
};

export default function ResearchPage() {
  const researchItems = [
    {
      title: 'Academic Works',
      description: 'Research papers, thesis work, and academic projects showcasing my journey as a BSIT student. Explore my contributions to the field of information technology.',
      icon: '📖',
      size: 'wide' as const,
      featured: true,
    },
    {
      title: 'Case Studies',
      description: 'Detailed case studies of systems and solutions I\'ve analyzed and documented. Real-world applications and problem-solving approaches.',
      icon: '🔍',
      size: 'medium' as const,
    },
    {
      title: 'System Documentation',
      description: 'Technical documentation for systems I\'ve worked on, including comprehensive guides and specifications from my work at NCIP.',
      icon: '📋',
      size: 'medium' as const,
    },
    {
      title: 'Technical Reports',
      description: 'In-depth reports and analyses of technical implementations, solutions, and system architectures. Comprehensive documentation of system designs and implementations.',
      icon: '📊',
      size: 'large' as const,
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
            My academic works, case studies, and system documentation
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

