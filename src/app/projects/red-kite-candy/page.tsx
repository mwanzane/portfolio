import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import StatBlock from '@/components/StatBlock';
import Section from '@/components/Section';
import Gallery from '@/components/Gallery';

export default function RedKiteCandyCaseStudy() {
  const project = projects.find(p => p.slug === 'red-kite-candy');
  if (!project) {
    notFound();
  }

  return (
    <CaseStudyLayout>
      <Header />

      {/* Hero */}
      <Section>
        <div className="text-center">
          <h1 className="text-hero font-bold text-text mb-6">Narrative-to-GTM: turning founder insight into a measurable content + distribution system.</h1>
          <p className="text-subhero text-text-muted mb-8 max-w-3xl mx-auto">
            Developed a cohesive brand narrative and GTM strategy for Red Kite Candy, transforming a local confectionery into a digitally engaged brand with measurable growth in awareness and engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
            <span>Role: Independent Project, Brand Story</span>
            <span>Timeframe: [3 months]</span>
            <span>Tools: Canva, Instagram, Google Analytics, QR Code Generators</span>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">The Problem</h2>
        <p className="text-subheading text-text-muted mb-6">
          Red Kite Candy struggled with inconsistent brand messaging, lack of digital presence, and no systematic approach to customer engagement. Their story was fragmented across social media and packaging, leading to unclear positioning and missed opportunities for growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatBlock title="Inconsistent Narrative" value="Fragmented messaging across channels" />
          <StatBlock title="No Content System" value="Ad-hoc social posts without strategy" />
          <StatBlock title="Unmeasured Distribution" value="No tracking of engagement or conversions" />
        </div>
      </Section>

      {/* Discovery → Insights */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Discovery → Insights</h2>
        <ul className="text-subheading text-text-muted space-y-3">
          <li>Customers value artisanal, locally-sourced ingredients but are unaware of the founder's story behind the brand.</li>
          <li>Competitive differentiation lies in the blend of traditional candy-making with modern, shareable storytelling.</li>
          <li>Key objections: Perception of candy as unhealthy; desire for unique, giftable experiences.</li>
          <li>Buying triggers: Seasonal holidays, local events, and social media discovery.</li>
          <li>Context: Urban professionals seeking premium, nostalgic treats for personal or corporate gifting.</li>
        </ul>
      </Section>

      {/* Positioning + Message Hierarchy */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Positioning + Message Hierarchy</h2>
        <div className="bg-surface border border-border rounded-lg p-6 mb-6">
          <h3 className="text-subheading font-bold text-text mb-4">Core Positioning Statement</h3>
          <p className="text-subheading text-text-muted italic">
            "Red Kite Candy: Where Hanover's heritage meets handcrafted sweetness, creating moments of joy through premium, locally-inspired confections."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Value Pillar 1: Heritage</h3>
            <p className="text-subheading text-text-muted">Preserving local traditions while innovating for modern tastes.</p>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Value Pillar 2: Quality</h3>
            <p className="text-subheading text-text-muted">Premium ingredients, handcrafted with care and attention to detail.</p>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Value Pillar 3: Experience</h3>
            <p className="text-subheading text-text-muted">Creating memorable moments through unique, shareable candy experiences.</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-subheading font-bold text-text mb-2">Proof Points</h3>
          <ul className="text-subheading text-text-muted space-y-1">
            <li>Local dairy partnerships ensuring freshness and sustainability</li>
            <li>Family recipes passed down through generations</li>
            <li>Customer testimonials highlighting unique flavor profiles</li>
          </ul>
          <h3 className="text-subheading font-bold text-text mb-2 mt-4">Objection Handling / "Why Now"</h3>
          <p className="text-subheading text-text-muted">
            In a world of mass-produced treats, Red Kite Candy offers a premium alternative that's both indulgent and meaningful. Perfect for gifting during the holiday season or celebrating local pride year-round.
          </p>
        </div>
      </Section>

      {/* Strategy */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Strategy</h2>
        <p className="text-subheading text-text-muted mb-6">
          The GTM approach focused on building a cohesive narrative system that bridges physical products with digital engagement, ensuring every touchpoint tells the brand story and drives measurable actions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatBlock title="Serialized Narrative" value="Founder-led story across multiple formats" />
          <StatBlock title="Physical-to-Digital Bridge" value="QR codes linking packaging to online content" />
          <StatBlock title="Distribution Plan" value="Instagram-first with local partnerships" />
          <StatBlock title="Measurement Plan" value="UTM tracking and engagement metrics" />
        </div>
      </Section>

      {/* Execution (Deliverables) */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Execution (Deliverables)</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Zine: Brand Story Companion</h3>
            <p className="text-subheading text-text-muted mb-4">
              A 16-page digital zine featuring the founder's journey, candy-making process, and local inspiration. Designed for download and sharing, it serves as a lead magnet and storytelling tool.
            </p>
            <Button variant="secondary">Download Zine PDF</Button>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Short-Form Series: Weekly IG Films</h3>
            <p className="text-subheading text-text-muted mb-4">
              3-minute Instagram Reels series: "Behind the Candy" – each episode highlighting a different aspect of the brand story with engaging hooks and calls-to-action.
            </p>
            <ul className="text-subheading text-text-muted space-y-1">
              <li>Format: 3-min reels with text overlays and music</li>
              <li>Hooks: "What makes our caramel different?"</li>
              <li>Cadence: Weekly releases on Tuesdays</li>
            </ul>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">QR/UTM Tracking System</h3>
            <p className="text-subheading text-text-muted mb-4">
              QR codes on packaging link to a dedicated landing page with UTM parameters for attribution tracking, enabling measurement of physical-to-digital conversions.
            </p>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Timeline</h3>
            <ul className="text-subheading text-text-muted space-y-1">
              <li>Week 1-2: Research and positioning</li>
              <li>Week 3-4: Zine creation and QR setup</li>
              <li>Week 5-8: IG series production and launch</li>
              <li>Ongoing: Content distribution and measurement</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Measurement Plan */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Measurement Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Awareness KPIs</h3>
            <ul className="text-subheading text-text-muted space-y-1">
              <li>Instagram reach and impressions</li>
              <li>Profile visits from QR scans</li>
              <li>Website traffic from branded links</li>
            </ul>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Engagement KPIs</h3>
            <ul className="text-subheading text-text-muted space-y-1">
              <li>Saves and shares on posts</li>
              <li>Comments and DM inquiries</li>
              <li>Zine downloads and page views</li>
            </ul>
          </div>
          <div>
            <h3 className="text-subheading font-bold text-text mb-2">Conversion KPIs</h3>
            <ul className="text-subheading text-text-muted space-y-1">
              <li>Email signups from landing pages</li>
              <li>In-store mentions and sales uplift</li>
              <li>Partnership inquiries</li>
            </ul>
          </div>
        </div>
        <p className="text-subheading text-text-muted mt-6">
          Tools: Google Analytics 4, Instagram Insights, Bitly for link tracking, custom QR code analytics.
        </p>
      </Section>

      {/* Results / Signals */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Results / Signals Observed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StatBlock title="QR Scans" value="[150] profile visits" />
          <StatBlock title="Follower Growth" value="[+200] new followers" />
          <StatBlock title="Engagement Rate" value="[15%] on branded content" />
          <StatBlock title="DM Inquiries" value="[25] partnership requests" />
        </div>
        <blockquote className="border-l-4 border-primary pl-4 italic text-text-muted">
          "The zine really helped us connect with customers on a deeper level. We've seen more repeat visitors and positive word-of-mouth." - [Founder Quote Placeholder]
        </blockquote>
      </Section>

      {/* What I'd Do Next */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">What I'd Do Next (Startup Mindset)</h2>
        <ul className="text-subheading text-text-muted space-y-3">
          <li><strong>Email Capture:</strong> Add pop-ups and lead magnets to turn social attention into an owned audience.</li>
          <li><strong>Landing Page + Lead Magnet:</strong> Create a "Candy Making Field Guide" downloadable resource.</li>
          <li><strong>Always-On Content:</strong> Establish pillars like seasonal recipes and behind-the-scenes stories with repurposing loops.</li>
          <li><strong>A/B Testing:</strong> Experiment with different hooks, CTAs, and posting times to optimize engagement.</li>
          <li><strong>Community Flywheel:</strong> Partner with local influencers and events to build sustainable growth.</li>
        </ul>
      </Section>

      {/* SaaS GTM Sidebar */}
      <Section>
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-subheading font-bold text-text mb-4">How This Maps to SaaS GTM</h2>
          <ul className="text-subheading text-text-muted space-y-2">
            <li><strong>Founder Interview → Customer Interviews:</strong> Extract insights from user conversations to build category POV.</li>
            <li><strong>Zine → Landing Page + Guide:</strong> Transform narrative into downloadable content that captures leads.</li>
            <li><strong>IG Series → Short-Form + LinkedIn:</strong> Repurpose content for founder-led distribution across platforms.</li>
            <li><strong>QR Tracking → UTMs + Funnel Tracking:</strong> Implement comprehensive attribution for full-funnel measurement.</li>
          </ul>
          <p className="text-subheading text-text-muted mt-4">
            Proposed Offer: "7-Day Quickstart Implementation" – A guided program to launch your SaaS narrative-to-GTM system.
          </p>
        </div>
      </Section>

      {/* Artifacts */}
      <Section>
        <h2 className="text-heading font-bold text-text mb-6">Artifacts</h2>
        <Gallery images={[
          { src: project.thumbnail, alt: 'Red Kite Candy exterior' },
          { src: 'https://picsum.photos/400/300', alt: 'Zine screenshot' },
          { src: 'https://picsum.photos/400/301', alt: 'Instagram post example' },
          { src: 'https://picsum.photos/400/302', alt: 'Candy packaging' }
        ]} />
        <div className="mt-6 text-center">
          <Button variant="secondary">Download Full Zine PDF</Button>
        </div>
      </Section>

      {/* Sticky Header CTA */}
      <div className="fixed top-4 right-4 z-50">
        <Button href="#contact">Contact</Button>
      </div>

      {/* Next Project CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-heading font-bold text-text mb-4">Next Project</h2>
          <p className="text-subheading text-text-muted mb-6">Coming soon: [Placeholder for next case study]</p>
          <Button href="/">Back to Home</Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">&copy; 2023 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </CaseStudyLayout>
  );
}