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
    <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer h-full flex flex-col">
      {/* Avatar/Icon */}
      <div className="mb-5 flex justify-center">
        {avatar ? (
          <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900/40 shadow-md">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-28 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center ring-2 ring-blue-100 dark:ring-blue-900/40 shadow-md">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </h3>

      {/* Role - Blue accent, larger font */}
      <p className="text-lg font-semibold text-blue-400 mb-3 text-center">
        {role}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed flex-grow">
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
