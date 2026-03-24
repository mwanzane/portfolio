import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function RedkiteCandy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Redkite Candy Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Redkite Candy</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">Redkite Candy exemplifies my approach to content strategy and digital marketing through brand storytelling, interactive media, and data-driven engagement.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Accomplished targeted brand positioning by identifying core clientele and shaping storytelling approach through detailed analysis of customer segments and product offerings.</li>
              <li>Created branded zine with embedded QR codes to boost customer engagement and provide accessible and informational brand content.</li>
              <li>Collaborated with visual designers and other creatives to translate brand narrative into compelling visual and written content to enhance overall brand resonance.</li>
              <li>Encouraged data driven decision making by utilizing QR code tracking data for ongoing market optimization.</li>
              <li>Planned and executed targeted events to engage clients, test products, and extract valuable market research.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Successfully integrated content strategy with digital marketing tactics, resulting in enhanced brand engagement and actionable customer insights.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">Visual designers, creatives, clients, and event participants to build a cohesive brand narrative.</p>

            <div className="text-center">
              <Button href="/skills">Back to Skills</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border pt-16 pb-8 border-b border-red-500">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
      <div className="h-4 bg-red-500"></div>
      </div>
  )
}