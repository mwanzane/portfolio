'use client';

import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on first visit or always, for demo always
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-surface border border-border rounded-lg p-6 max-w-md mx-4 shadow-lg relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-text mb-4">Welcome to NDINDA MWANZA's Portfolio</h2>
        <p className="text-text-muted mb-4">
          This site showcases my expertise in product marketing, content strategy, and digital growth. Explore my journey, services, and projects.
        </p>
        <h3 className="text-lg font-semibold text-text mb-2">Site Guide:</h3>
        <ul className="text-text-muted mb-4 space-y-1">
          <li><strong>About:</strong> My background and experience.</li>
          <li><strong>Services:</strong> How I can help your business.</li>
          <li><strong>Skills/Projects:</strong> Case studies and expertise areas.</li>
          <li><strong>Contact:</strong> Let's connect!</li>
        </ul>
        <h3 className="text-lg font-semibold text-text mb-2">My Approach:</h3>
        <p className="text-text-muted mb-4">
          This portfolio was built with Next.js, Tailwind CSS, and TypeScript for fast, accessible, and maintainable web experiences. I focus on user-centric design and data-driven strategies in all my work.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-primary text-surface py-2 px-4 rounded hover:bg-primary-hover"
        >
          Explore the Site
        </button>
      </div>
    </div>
  );
}