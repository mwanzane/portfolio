import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function IndependentProjects() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Independent Projects Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Independent Projects</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">Through independent projects, I've applied my skills in brand strategy, product marketing, and community building to drive creative and business outcomes.</p>

            <h2 className="text-heading font-bold text-text mb-6">Red Kite Candy – Brand Strategy & Customer Engagement</h2>
            <p className="text-subheading text-text-muted mb-4">Spring 2025-Present</p>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Accomplished targeted brand positioning by identifying core clientele and shaping storytelling approach through detailed analysis of customer segments and product offerings.</li>
              <li>Created branded zine with embedded QR codes to boost customer engagement and provide accessible and informational brand content.</li>
              <li>Collaborated with visual designers and other creatives to translate brand narrative into compelling visual and written content to enhance overall brand resonance.</li>
              <li>Encouraged data driven decision making by utilizing QR code tracking data for ongoing market optimization.</li>
              <li>Planned and executed targeted events to engage clients, test products, and extract valuable market research.</li>
            </ul>
            <p className="text-subheading text-text-muted mb-8"><strong>Who I Worked With:</strong> Visual designers, creatives, clients, and event participants.</p>

            <h2 className="text-heading font-bold text-text mb-6">Serial Saas Founder – Product Marketing & Account Management</h2>
            <p className="text-subheading text-text-muted mb-4">Winter 2025-Present</p>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Developed comprehensive brand narrative leveraging founder’s personal narrative and achievements to support projected sales and marketing efforts.</li>
              <li>Collaborated with product development by analyzing emerging products against the target market, recommending critical feature enhancements, and aligning key messaging copy.</li>
              <li>Adapted and refined collaborative workflows through reflective evaluation, bridging communication between production and technical teams to enhance product-market fit.</li>
            </ul>
            <p className="text-subheading text-text-muted mb-8"><strong>Who I Worked With:</strong> Founder, product development team, production and technical teams.</p>

            <h2 className="text-heading font-bold text-text mb-6">ArtiQulate Art Project – Volunteer</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Supported art collective by providing upcoming artists with tools necessary to navigate their careers.</li>
              <li>Facilitated writing workshops for emerging artists to engage in group writing sessions and receive peer-to-peer feedback and skills to convert creative skills into marketable assets.</li>
              <li>Transitioned social media connections into productive collaborative programs.</li>
            </ul>
            <p className="text-subheading text-text-muted mb-12"><strong>Who I Worked With:</strong> Emerging artists, art collective members, workshop participants.</p>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Successfully built brands, engaged communities, and fostered creative collaborations, resulting in enhanced market presence and artist empowerment.</p>

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