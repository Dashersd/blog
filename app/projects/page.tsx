import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects - Helman Dacuma',
  description: 'Featured system projects I\'ve worked on including E-Jeepney Android Capstone System, Sales CRM, UI/UX Designs, and Web Development projects.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Jeepney Android Capstone System',
      description: 'A functional mobile prototype built to support transportation monitoring and operations. Includes UI/UX layout, app flow, and basic functionalities.',
      technologies: ['Android', 'UI/UX Design', 'Mobile Development'],
      featured: true, // Make this one larger
    },
    {
      title: 'Sales CRM Lead Tracking Sheet',
      description: 'A practical Excel-based CRM system designed to track leads, sales activity, and follow-ups for small businesses.',
      technologies: ['Excel', 'CRM', 'Data Management'],
    },
    {
      title: 'UI/UX Designs & Prototypes',
      description: 'Multiple system layouts created for clients and school projects, including dashboards, login systems, and workflow screens.',
      technologies: ['UI/UX Design', 'Prototyping', 'Figma'],
    },
    {
      title: 'Web Development Projects',
      description: 'Small-scale websites and front-end pages using HTML, CSS, and PHP.',
      technologies: ['HTML', 'CSS', 'PHP', 'Front-end'],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the featured system projects I&apos;ve worked on:
          </p>
        </div>

        {/* Projects Grid - Asymmetrical Layout */}
        <ProjectsGrid projects={projects} />

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Want to see more details or discuss a project?{' '}
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold underline underline-offset-4 transition-colors hover:font-bold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
