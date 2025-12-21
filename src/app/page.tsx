import { projects } from '@/data/projects';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Product Marketing to Growth: Narrative, System, Scale
          </h1>
          <p className="text-xl text-text-muted mb-12">
            I turn PMM insights into repeatable content systems and measurable digital growth. From positioning to conversion, I build operating systems for product-led marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#projects">View Work</Button>
            <Button variant="secondary" href="/resume.pdf">Download Resume</Button>
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading>My Process</SectionHeading>
          <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
            "I use PMM to decide what to say, content to make it repeatable, and digital to validate and scale."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text mb-4">Product Marketing</h3>
              <p className="text-text-muted">
                Define the narrative: ICP, positioning, messaging hierarchy, proof, objections, offer/CTA.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text mb-4">Content Strategy</h3>
              <p className="text-text-muted">
                Build the system: pillars, formats, series, repurposing, cadence.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text mb-4">Digital Marketing</h3>
              <p className="text-text-muted">
                Ship + learn: distribution, experiments, tracking, iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.slice(0, 4).map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Signals */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
<p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
          <SectionHeading>Capabilities & Signals</SectionHeading>
          <p className="text-text-muted mb-8">
            Fast iterations, customer research, strong writing, measurement mindset.
          </p>
          <p className="text-lg font-semibold text-red-accent">
            Product Marketing / Content Strategy / Growth (Digital)
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-red-accent text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Open to PMM / Content Strategy / Growth Roles</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Email Me</Button>
            <Button variant="secondary" href="https://replom.com/ask/ndinda-f3089466" target="_blank" rel="noopener noreferrer">Ask a Paid Question</Button>
            <Button variant="secondary" href="/resume.pdf">Download Resume</Button>
          </div>
          <p className="mt-6">
            <a href="https://linkedin.com/in/your-profile" className="underline hover:no-underline">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* Need a Quick Answer Card */}
      <div className="mt-12 p-6 bg-surface border border-border rounded-lg text-center max-w-2xl mx-auto">
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
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
<p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

