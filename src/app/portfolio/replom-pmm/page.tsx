'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function ReplomPMM() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Positioning",
      content: "Identified best-fit customers as businesses seeking expert advice in product marketing, content strategy, and digital growth. Evaluated competitors (general consulting firms, free forums) and alternatives (internal hires). Market category: Niche expert Q&A platforms. Aligned features like specialized questions and value-driven responses to deliver differentiated value in accessible, high-quality consulting. Outcomes: Differentiated positioning that attracts businesses, sets apart from generic services, unites the platform's expert network."
    },
    {
      title: "Packaging",
      content: "Simplified use cases: Quick Q&A for clients, scalable expert onboarding. Aligned pricing model with subscription tiers reflecting value (basic to premium). Captured gaps (e.g., lack of niche focus) and fed into roadmap (add more categories). Outcomes: Clear packaging simplifies access, pricing, and expansion."
    },
    {
      title: "Narrative",
      content: "Defined a narrative: 'Unlock expert insights or fall behind in competitive markets.' Highlighted opportunities for businesses (faster decisions, expert guidance) and risks (costly mistakes without advice). Positioned Replom's role in democratizing access to specialized knowledge. Outcomes: Compelling narrative drives sign-ups and engagement across marketing channels."
    }
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">PMM Demo: Replom Consulting Platform</h1>
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