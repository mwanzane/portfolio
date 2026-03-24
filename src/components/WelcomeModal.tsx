'use client';

import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkAndShowModal = () => {
      const lastShown = localStorage.getItem('welcomeModalLastShown');
      const now = Date.now();
      if (!lastShown || now - parseInt(lastShown) > 3600000) { // 1 hour in ms
        setIsOpen(true);
        localStorage.setItem('welcomeModalLastShown', now.toString());
      }
    };

    checkAndShowModal();
  }, []);

  useEffect(() => {
    let inactivityTimeout: NodeJS.Timeout;

    const resetInactivity = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        const lastShown = localStorage.getItem('welcomeModalLastShown');
        const now = Date.now();
        if (!lastShown || now - parseInt(lastShown) > 3600000) {
          setIsOpen(true);
          localStorage.setItem('welcomeModalLastShown', now.toString());
        }
      }, 3600000); // 1 hour
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetInactivity));

    resetInactivity(); // start timer

    return () => {
      events.forEach(event => window.removeEventListener(event, resetInactivity));
      clearTimeout(inactivityTimeout);
    };
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
         <h2 className="text-xl font-bold text-text mb-4">Unlock Your Full Potential: Interactive CVs for Professionals Who Can't Be Contained</h2>
         <p className="text-text-muted mb-4">
           In a world where hiring moves at digital speed, static CVs trap your full potential – complex projects, dynamic skills, and unique stories get lost in lifeless documents. This interactive CV webapp pioneers the future: a living showcase that demonstrates your breadth interactively, turning passive resumes into engaging stories.
         </p>
         <h3 className="text-lg font-semibold text-text mb-2">Why Adapt Now:</h3>
         <ul className="text-text-muted mb-4 space-y-1">
           <li><strong>Opportunity:</strong> Interactive CVs unlock your true breadth, captivating recruiters and opening doors.</li>
           <li><strong>Risks:</strong> Don't adapt? Stay invisible as competitors shine with dynamic portfolios.</li>
           <li><strong>Future:</strong> This webapp builds a new standard for career storytelling.</li>
           <li><strong>Action:</strong> Explore the site to transform your professional narrative.</li>
         </ul>
         <h3 className="text-lg font-semibold text-text mb-2">Experience the Difference:</h3>
         <p className="text-text-muted mb-4">
           Built for performance and accessibility, this CV turns passive documents into active conversations. Adapt to interactive hiring or risk being overlooked—start your journey now.
         </p>
         <button
           onClick={() => setIsOpen(false)}
           className="w-full bg-primary text-surface py-2 px-4 rounded hover:bg-primary-hover"
         >
           Start the Product Deck Journey
         </button>
      </div>
    </div>
  );
}