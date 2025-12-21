import Header from '@/components/Header';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Skills Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Skills</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">Here are the key skills and expertise areas that define my professional capabilities.</p>

            <h2 className="text-heading font-bold text-text mb-6">Technical</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li><Link href="/skills/systems-analyst" className="hover:text-primary transition-smooth">Systems Analyst</Link></li>
              <li><Link href="/skills/business-development" className="hover:text-primary transition-smooth">Business Development</Link></li>
              <li><Link href="/skills/operations" className="hover:text-primary transition-smooth">Operations</Link></li>
              <li><Link href="/skills/independent-projects" className="hover:text-primary transition-smooth">Independent Projects</Link></li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Content Strategy/Digital Marketing</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li><Link href="/skills/redkite-candy" className="hover:text-primary transition-smooth">Redkite Candy</Link></li>
              <li><Link href="/skills/replom" className="hover:text-primary transition-smooth">Replom</Link></li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Communications and Social Media</h2>
            <ul className="text-subheading text-text-muted mb-12 space-y-2">
              <li><Link href="/skills/allen-house" className="hover:text-primary transition-smooth">Office of Residential Life at Dartmouth</Link></li>
              <li><Link href="/skills/my-social-media" className="hover:text-primary transition-smooth">My Social Media</Link></li>
            </ul>

            <div className="text-center">
              <Button href="/">Back to Home</Button>
            </div>
          </div>
        </div>
      </main>

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

    </div>
  )
}