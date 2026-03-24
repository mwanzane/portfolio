'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function CVWebappPMM() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Positioning",
      content: "Identified best-fit customers as tech professionals (developers, designers) seeking standout portfolios. Evaluated competitors (LinkedIn profiles, static PDFs) and alternatives (building custom sites). Market category: Interactive digital portfolios. Aligned features like dynamic sections and storytelling to deliver differentiated value in engagement and personalization. Outcomes: Differentiated positioning that resonates with innovators, sets apart from static resumes, unites the portfolio's narrative."
    },
    {
      title: "Packaging",
      content: "Simplified use cases: Easy navigation for recruiters, interactive demos for skills. Aligned 'pricing' as free access with premium feel. Captured gaps (e.g., lack of multimedia) and fed into roadmap (add more embeds). Outcomes: Clear packaging makes the CV easier to understand, experience, and recommend."
    },
    {
      title: "Narrative",
      content: "Defined a narrative: 'Adapt to interactive hiring or risk being overlooked.' Highlighted opportunities for job seekers (better engagement, faster callbacks) and risks (stagnation in traditional methods). Positioned the CV's role in building a future of dynamic professional presentation. Outcomes: Compelling narrative drives action, used consistently in the site's messaging."
    }
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">PMM Demo: Interactive CV Webapp</h1>
          <div className="relative max-w-4xl mx-auto">
            <div className="border border-border rounded-lg p-8 bg-surface">
              <h2 className="text-2xl font-bold text-text mb-6">{slides[currentSlide].title}</h2>
              <p className="text-text-muted leading-relaxed">{slides[currentSlide].content}</p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <Button onClick={prevSlide} disabled={currentSlide === 0} aria-label="Previous slide">
                Previous
              </Button>
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} aria-label="Next slide">
                Next
              </Button>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/portfolio/product-marketing">Back to Product Marketing Portfolio</Button>
          </div>
        </div>
      </main>
    </div>
  );
}