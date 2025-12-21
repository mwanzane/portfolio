import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function Replom() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Replom Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Replom</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">Replom is a platform where I offer expert consultations on content strategy and digital marketing, providing personalized advice to help professionals and businesses succeed.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Provide in-depth consultations on content strategy, including narrative development, audience targeting, and multi-channel content creation.</li>
              <li>Offer digital marketing expertise, advising on campaigns, SEO, SEM, and data-driven optimization techniques.</li>
              <li>Facilitate one-on-one Q&A sessions to address specific challenges in brand storytelling and customer engagement.</li>
              <li>Deliver actionable insights tailored to individual client needs, drawing from real-world experience in product marketing and growth.</li>
              <li>Build and maintain professional relationships through high-quality, value-driven interactions on the platform.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Successfully guided numerous clients in refining their content strategies and digital marketing approaches, leading to improved engagement and business outcomes.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">Entrepreneurs, marketers, content creators, and business professionals seeking expert advice through the Replom platform.</p>

            <div className="text-center">
              <Button href="/skills">Back to Skills</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
<p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}