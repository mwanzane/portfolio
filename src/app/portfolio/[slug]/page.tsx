import Header from '@/components/Header';
import { Button } from '@/components/Button';
import { portfolios } from '@/data/portfolios';
import { skillsTaxonomy } from '@/data/skills';
import CVWebappSlides from './slides/cv-webapp';
import ReplomSlides from './slides/replom';

export async function generateStaticParams() {
  return portfolios.map(portfolio => ({
    slug: portfolio.slug,
  }));
}

export default function PortfolioPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const portfolio = portfolios.find(p => p.slug === slug);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-section">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-hero font-bold text-text mb-12">Portfolio Not Found</h1>
            <Button href="/skills">Back to Skills & Projects</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-xl font-bold mb-12 text-center uppercase tracking-wide" style={{color: '#005939'}}>Portfolio</h1>
          {slug === 'product-marketing' && (
            <div className="space-y-8">
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-bold text-text mb-4">Interactive CV Webapp</h3>
                <CVWebappSlides />
              </div>
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-bold text-text mb-4">Replom Consulting Platform</h3>
                <ReplomSlides />
              </div>
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-bold text-text mb-4">Additional PMM Samples Coming Soon</h3>
                <p className="text-text-muted">More case studies demonstrating positioning, packaging, and narrative in various industries.</p>
              </div>
            </div>
          )}
          <div className="text-center mt-12">
            <Button href="/skills">Back to Skills & Projects</Button>
          </div>
        </div>
      </main>
    </div>
  );
}