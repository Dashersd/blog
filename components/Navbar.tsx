'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const adminLinks = [
    { href: '/admin/editor', label: 'Editor', icon: '✏️' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Helman Dacuma
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link group relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
                {/* Accent underline on hover and active */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 transition-all duration-300 ${
                  pathname === link.href 
                    ? 'opacity-100 scale-x-100' 
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            {/* Admin Links */}
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link group relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
                title="Blog Editor"
              >
                <span className="mr-1">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                // Close icon (X)
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

