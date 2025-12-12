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
    <nav className="bg-header-navy shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Helman Dacuma
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-white bg-accent-blue'
                    : 'text-white hover:text-accent-blue-200 hover:bg-header-navy-700'
                }`}
              >
                {link.label}
                {/* Enhanced accent underline for active link */}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue transition-all duration-300 opacity-100"></span>
                )}
              </Link>
            ))}
            {/* Admin Links */}
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-white bg-accent-blue'
                    : 'text-white hover:text-accent-blue-200 hover:bg-header-navy-700'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-blue-200 hover:bg-header-navy-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-header-navy border-t border-header-navy-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-white bg-accent-blue'
                    : 'text-white hover:text-accent-blue-200 hover:bg-header-navy-700'
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
                    ? 'text-white bg-accent-blue'
                    : 'text-white hover:text-accent-blue-200 hover:bg-header-navy-700'
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

