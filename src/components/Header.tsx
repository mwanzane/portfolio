'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary link-underline uppercase tracking-wide">
          <Image
            src="/pictures/headshot.jpg"
            alt="NDINDA MWANZA headshot"
            width={120}
            height={120}
            className="w-12 h-12 rounded-full mr-3 border border-border"
          />
          NDINDA MWANZA
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-text hover:text-primary transition-smooth link-underline">Home</Link>
          <Link href="/about" className="text-text hover:text-primary transition-smooth link-underline">About</Link>
          <Link href="/contact" className="text-text hover:text-primary transition-smooth link-underline">Contact</Link>
          <Link
            href="https://replom.com/ask/ndinda-f3089466"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-smooth link-underline text-sm"
          >
            Ask a Paid Question
          </Link>
          <Button href="/resume.pdf" variant="secondary" className="ml-4">Download Resume</Button>
        </nav>
        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border py-4">
          <nav className="container mx-auto px-6 flex flex-col space-y-4">
            <Link href="/" className="text-text hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-text hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-text hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link
              href="https://replom.com/ask/ndinda-f3089466"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Ask a Paid Question
            </Link>
            <Button href="/resume.pdf" variant="secondary" onClick={() => setIsOpen(false)}>Download Resume</Button>
          </nav>
        </div>
      )}
    </header>
  );
}