'use client';

import ProjectCard from '@/components/ProjectCard';
import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies?: string[];
  featured?: boolean;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => { cardRefs.current[index] = el; }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[index]
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          } ${
            project.featured
              ? 'md:col-span-3 md:row-span-1'
              : 'md:col-span-1'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            featured={project.featured}
          />
        </div>
      ))}
    </div>
  );
}
