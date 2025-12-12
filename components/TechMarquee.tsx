'use client';

type TechLogo = {
  name: string;
  svg: JSX.Element;
};

const technologies: TechLogo[] = [
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 64 64" className="h-9 w-9 text-white" role="img" aria-label="Next.js">
        <rect width="64" height="64" rx="14" className="fill-[#0F172A]" />
        <path
          d="M18 20h5.8l9 13.1V20H39v24h-5.8l-9-13.2V44H18V20Z"
          className="fill-white"
        />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label="Tailwind CSS">
        <rect width="64" height="64" rx="14" className="fill-[#0B1120]" />
        <path
          d="M32 18c-6.2 0-10 3.1-11.4 9.4 2.3-3.1 4.9-4.3 7.9-3.6 1.7.4 2.9 1.7 4.2 3 2.2 2.3 4.7 4.9 10.7 4.9 6.2 0 10-3.1 11.4-9.4-2.3 3.1-4.9 4.3-7.9 3.6-1.7-.4-2.9-1.7-4.2-3C40.5 20.6 38 18 32 18Zm-11.4 12c-6.2 0-10 3.1-11.4 9.4 2.3-3.1 4.9-4.3 7.9-3.6 1.7.4 2.9 1.7 4.2 3 2.2 2.3 4.7 4.9 10.7 4.9 6.2 0 10-3.1 11.4-9.4-2.3 3.1-4.9 4.3-7.9 3.6-1.7-.4-2.9-1.7-4.2-3-2.2-2.3-4.7-4.9-10.7-4.9Z"
          className="fill-[#38BDF8]"
        />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label="TypeScript">
        <rect width="64" height="64" rx="12" className="fill-[#1F7AE0]" />
        <path
          d="M17 27.5h11v3.5h-3.7V46H20V31h-3V27.5Zm12.5 10.6c0-5.1 3.1-8.5 9-8.5 2.6 0 4.7.6 6.6 2l-1.8 3c-1.4-.9-2.6-1.4-4.5-1.4-2.8 0-4.5 1.9-4.5 4.8 0 3 1.9 4.8 5 4.8 1.1 0 2.1-.2 3-.7v-2.5h-3.5v-3.2H45V43c-1.7 1.5-3.9 2.6-6.8 2.6-5.4 0-8.7-3.3-8.7-7.5Z"
          className="fill-white"
        />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label="JavaScript">
        <rect width="64" height="64" rx="12" className="fill-[#F7DF1E]" />
        <path
          d="M29 18h6v22.5c0 6.5-3.6 9.2-8.9 9.2-2.7 0-4.6-.5-6.4-1.5l1.9-4.4c1.1.6 2.3 1 3.7 1 2.2 0 3.7-.9 3.7-3.7V18Zm14 17.4c0-5 3.5-8.4 8.4-8.4 2.7 0 4.6.8 6.4 2.5l-3 3.4c-.9-.8-1.8-1.3-3-1.3-1.9 0-3.2 1.3-3.2 3.8V44H43V18h6v17.4Z"
          className="fill-[#0F172A]"
        />
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label="React">
        <rect width="64" height="64" rx="14" className="fill-[#0B1120]" />
        <g className="stroke-[#61DAFB]" strokeWidth="3" fill="none">
          <ellipse cx="32" cy="32" rx="18" ry="8" />
          <ellipse cx="32" cy="32" rx="8" ry="18" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="8" ry="18" transform="rotate(-60 32 32)" />
        </g>
        <circle cx="32" cy="32" r="4" className="fill-[#61DAFB]" />
      </svg>
    ),
  },
];

export default function TechMarquee() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-slate-800 py-8 border-y border-gray-200 dark:border-slate-700">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="mx-10 flex items-center gap-3 text-gray-300 dark:text-gray-300"
          >
            {tech.svg}
            <span className="text-base font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
