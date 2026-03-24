'use client';

import { useState, useEffect } from 'react';
import { skillsTaxonomy } from '@/data/skills';

export default function ReplomSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const category = skillsTaxonomy.find(cat => cat.category === "Content Strategy");
  const bullets = category ? category.bullets : [];

  const slides = [
    {
      title: "Problem",
      content: "Professionals struggle to translate complex narratives into effective content assets."
    },
    {
      title: "Positioning Applied",
      content: bullets[0] || "[placeholder]"
    },
    {
      title: "Packaging Applied",
      content: bullets[1] || "[placeholder]"
    },
    {
      title: "Narrative Applied",
      content: bullets[2] || "[placeholder]"
    },
    {
      title: "Outcomes",
      content: bullets[3] || "[placeholder]"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  return (
    <div className="relative">
      <div className="mb-6 p-4 bg-surface border border-border rounded">
        <h4 className="text-lg font-bold text-text mb-2">{slides[currentSlide].title}</h4>
        <p className="text-text-muted">{slides[currentSlide].content}</p>
      </div>
      <div
        className="flex justify-center space-x-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
