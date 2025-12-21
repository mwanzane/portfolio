import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Link from 'next/link';
import { Button } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import WelcomeModal from '@/components/WelcomeModal';
import FeaturedCard from '@/components/FeaturedCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WelcomeModal />

      {/* Hero */}
      <section className="pt-20 pb-0 bg-surface">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-text mt-4 mb-10">
            Turning attention into trust, trust into action.
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
            <Button href="/services#account-community" className="bg-transparent text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-md -mt-2 z-10">Account/Community Management</Button>
            <Button href="/services#content-strategy" className="bg-transparent text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-md -mt-2 z-10">Content Strategy</Button>
            <Button href="/services#digital-marketing" className="bg-transparent text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-md -mt-2 z-10">Digital Marketing</Button>
            <Button href="/services#product-marketing" className="bg-transparent text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-md -mt-2 z-10">Product Marketing</Button>
          </div>
          <p className="text-xl text-text-muted mb-6">
            <span className="block md:inline">When it's clear, it's easy to sell. </span><br className="md:hidden" />
            <span className="block md:inline">I start with simple questions: why this exists, who it’s for, what it changes, and how it delivers value. </span><br className="md:hidden" />
            <span className="block md:inline">With this understanding I position, package, and create narrative-led GTM strategies that convert.</span>
          </p>
        </div>
      </section>

       {/* Featured Projects */}
      <section id="projects" className="pt-16 pb-0 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="flex flex-col gap-12">
             {projects.slice(0, 2).map((project, index) => (
                <FeaturedCard
                  key={project.slug}
                  thumbnail={project.thumbnail}
                  title={project.title}
                  featuredTags={project.featuredTags.map(tag => ({ text: tag, href: project.skillsHref }))}
                  learnMoreHref={project.learnMoreHref}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Need a Quick Answer Card */}
      <div className="mt-16 p-6 bg-surface border border-border rounded-lg text-center max-w-2xl mx-auto shadow-lg z-10 relative">
        <h3 className="text-subheading font-bold text-text mb-4">Need a Quick Answer?</h3>
        <p className="text-text-muted mb-6">
          For paid questions or consulting, check out Replom.
        </p>
        <a
          href="https://replom.com/ask/ndinda-f3089466"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-surface border border-primary text-primary rounded-lg hover:bg-primary hover:text-surface transition-smooth"
        >
          Ask a Paid Question
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>

      {/* Red Margin */}
      <div className="h-4 bg-red-500"></div>
    </div>
  );
}

