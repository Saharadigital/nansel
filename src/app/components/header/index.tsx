'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../svg/logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background text-foreground w-full border-b border-primary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
  
        <Link href="/" className="text-2xl font-bold tracking-wide text-primary">
            <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {/* <Link href="/" className="hover:text-accent">Home</Link> */}
          <Link href="/about-us" className="hover:text-accent">About us</Link>
          <Link href="/our-process" className="hover:text-accent">Our Process</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-2 font-medium">
          <Link href="/" className="block hover:text-accent">Home</Link>
          <Link href="/about" className="block hover:text-accent">About</Link>
          <Link href="/services" className="block hover:text-accent">Services</Link>
          <Link href="/contact" className="block hover:text-accent">Contact</Link>
        </nav>
      )}
    </header>
  );
}
