import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function AllenHouse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Allen House Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Allen House - Office of Residential Life at Dartmouth</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">As Communications and Social Media Fellow at Allen House, part of Dartmouth's Office of Residential Life, I focused on enhancing communications and social media strategies for house-wide engagement.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Supported house professor with house-wide communications and programming.</li>
              <li>Developed and managed social media content to engage residents and promote house activities.</li>
              <li>Coordinated communications strategies to improve information flow and community building.</li>
              <li>Assisted in planning and executing programming events with effective promotional campaigns.</li>
              <li>Utilized digital platforms to foster connections and highlight house achievements.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Successfully enhanced house communications, leading to better resident engagement and more effective programming outreach.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">House professor, residential life staff, Dartmouth students and residents.</p>

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