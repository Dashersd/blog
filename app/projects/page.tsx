import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects - Helman Dacuma',
  description: 'D’Marsians: Web-Based Admission and Progress Tracking with Real-Time Visualization System - A comprehensive capstone project.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'D’Marsians: Web-Based Admission and Progress Tracking with Real-Time Visualization System',
      description: 'A comprehensive web-based platform designed to streamline student admissions and monitor academic progress through real-time data visualization and tracking.',
      technologies: ['PHP', 'CSS', 'JS', 'Database Management', 'Real-time Visualization'],
      featured: true,
    },
    {
      title: 'Aurelia',
      description: 'A modern and elegant jewelry e-commerce website designed with a focus on luxury aesthetics and user-friendly product discovery.',
      technologies: ['React', 'Tailwind CSS', 'UI/UX Design'],
      link: 'https://aurelia-sigma.vercel.app',
      image: '/projects/aurelia.png',
    },
    {
      title: 'Timeshift',
      description: 'A specialized web-based watch store featuring a curated collection of timepieces with a clean, classic, and responsive interface.',
      technologies: ['HTML', 'CSS', 'JS'],
      link: 'https://time-shift-ivory.vercel.app/watch.html',
      image: '/projects/timeshift.png',
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
