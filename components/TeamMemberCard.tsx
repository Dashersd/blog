'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  avatar?: string;
  href?: string;
}

export default function TeamMemberCard({ 
  name, 
  role, 
  description, 
  avatar,
  href 
}: TeamMemberCardProps) {
  const content = (
    <div className="group relative p-6 rounded-2xl h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1
      /* Glassmorphism Effect */
      bg-white/5 dark:bg-black/20
      backdrop-blur-md
      border border-white/10 dark:border-white/18
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
      hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]
      hover:border-white/25 dark:hover:border-blue-400/40">
      {/* Avatar/Icon */}
      <div className="mb-5 flex justify-center">
        {avatar ? (
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-white/30 shadow-lg group-hover:ring-blue-400/50 dark:group-hover:ring-blue-400/60 transition-all duration-300">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
        ) : (
          <div className="w-32 h-32 bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center ring-2 ring-white/20 dark:ring-white/30 shadow-lg group-hover:ring-blue-400/50 dark:group-hover:ring-blue-400/60 transition-all duration-300">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
        {name}
      </h3>

      {/* Role - Blue accent, larger font */}
      <p className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
        {role}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-200 text-center leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
