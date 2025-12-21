import { projects } from '@/data/projects';
import Header from '@/components/Header';
import Link from 'next/link';
import { Button } from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-0 bg-surface">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-text mt-4 mb-10">
            Turning attention into trust, trust into action.
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
            <Button href="/services#account-community" className="bg-white text-black hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-lg -mt-2 z-10">Account/Community Management</Button>
            <Button href="/services#content-strategy" className="bg-white text-black hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-lg -mt-2 z-10">Content Strategy</Button>
            <Button href="/services#digital-marketing" className="bg-white text-black hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-lg -mt-2 z-10">Digital Marketing</Button>
            <Button href="/services#product-marketing" className="bg-white text-black hover:bg-red-500 hover:text-white px-4 py-2 border border-red-200 text-sm shadow-lg -mt-2 z-10">Product Marketing</Button>
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
              <div key={project.slug} className="flex flex-col md:flex-row gap-8 items-center border border-red-200 hover:border-red-500 transition-colors p-4 rounded">
                 {index % 2 === 0 ? (
                   <>
                     <img src={project.thumbnail} alt={project.title} className="w-full md:w-1/2 h-64 object-cover rounded" />
                     <div className="w-full md:w-1/2 text-center md:text-left">
                       <h3 className="text-2xl font-bold text-text mb-4">{project.title}</h3>
                       <div className="flex flex-wrap gap-2 justify-center mb-4">
                         {(project.slug === 'red-kite-candy' ? ["Brand Story", "Content Strategy", "Digital Marketing"] : ["Content Strategy", "Digital Marketing"]).map(tag => (
                           <Link key={tag} href={project.slug === 'red-kite-candy' ? '/skills/redkite-candy' : '/skills/replom'} className="inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-red-500 hover:text-white border border-red-200 text-sm shadow-lg">{tag}</Link>
                         ))}
                       </div>
                        <a href={project.title.includes('Replom') ? 'https://replom.com' : project.slug === 'red-kite-candy' ? 'https://redkitecandy.com' : `/projects/${project.slug}`} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-surface rounded hover:bg-primary/80">Learn More</a>
                     </div>
                   </>
                 ) : (
                  <>
                     <div className="w-full md:w-1/2 text-center md:text-right">
                       <h3 className="text-2xl font-bold text-text mb-4">{project.title}</h3>
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex gap-2 justify-center">
                            <Link href="/skills/redkite-candy" className="inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-red-500 hover:text-white border border-red-200 text-sm shadow-lg">Brand Story</Link>
                            <Link href="/skills/redkite-candy" className="inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-red-500 hover:text-white border border-red-200 text-sm shadow-lg">Content Strategy</Link>
                          </div>
                          <div className="flex justify-center">
                            <Link href="/skills/redkite-candy" className="inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-red-500 hover:text-white border border-red-200 text-sm shadow-lg">Digital Marketing</Link>
                          </div>
                        </div>
                       <Link href={`/projects/${project.slug}`} className="inline-block px-6 py-3 bg-primary text-surface rounded hover:bg-primary/80">Learn More</Link>
                     </div>
                    <img src={project.thumbnail} alt={project.title} className="w-full md:w-1/2 h-64 object-cover rounded" />
                  </>
                )}
              </div>
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

