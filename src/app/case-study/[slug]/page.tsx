import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import Tag from '@/components/Tag';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">{project.title}</h1>
          <Image src={project.thumbnail} alt={project.title} width={1200} height={600} className="w-full h-96 object-cover mb-12 rounded-lg" />
          <div className="prose prose-lg mx-auto text-text space-y-12">
            <section>
              <h2 className="text-heading font-bold text-text mb-6">Role</h2>
              <p className="text-subheading text-text-muted">{project.role}</p>
            </section>
            <section>
              <h2 className="text-heading font-bold text-text mb-6">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </section>
            <section>
              <h2 className="text-heading font-bold text-text mb-6">Challenge</h2>
              <p className="text-subheading text-text-muted">{project.challenge}</p>
            </section>
            <section>
              <h2 className="text-heading font-bold text-text mb-6">Strategy</h2>
              <ul className="text-subheading text-text-muted space-y-2">
                {project.strategy.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-heading font-bold text-text mb-6">Results</h2>
              <ul className="text-subheading text-text-muted space-y-2">
                {project.results.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </section>
            <section className="text-center">
              <Button href="/">Back to Home</Button>
            </section>
          </div>
        </div>
      </main>
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
<p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}