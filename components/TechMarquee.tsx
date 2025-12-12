'use client';

const technologies = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'PHP',
  'Java',
  'MySQL',
];

export default function TechMarquee() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-slate-800 py-8 border-y border-gray-200 dark:border-slate-700">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedTechs.map((tech, index) => (
          <span
            key={index}
            className="mx-8 text-gray-400 dark:text-gray-500 text-lg font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
