'use client';

import ResearchCard from '@/components/ResearchCard';
import { useEffect, useRef, useState } from 'react';

interface ResearchItem {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

interface ResearchGridProps {
  items: ResearchItem[];
}

export default function ResearchGrid({ items }: ResearchGridProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(items.length).fill(false));
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
      const currentRefs = cardRefs.current;
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Size classes for Bento Grid
  const sizeClasses = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-1',
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2 md:row-span-1',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => { cardRefs.current[index] = el; }}
          className={`transition-all duration-700 ease-out ${
            visibleCards[index]
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          } ${sizeClasses[item.size || 'medium']}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <ResearchCard
            title={item.title}
            description={item.description}
            icon={item.icon}
            link={item.link}
            featured={item.featured}
            size={item.size || 'medium'}
          />
        </div>
      ))}
    </div>
  );
}
