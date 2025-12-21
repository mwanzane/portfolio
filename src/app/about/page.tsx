import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* About Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">About Me</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">I am a seasoned product marketing professional with over 8 years of experience in content strategy, digital marketing, and community building. My passion lies in crafting compelling brand stories that resonate with audiences and drive business growth.</p>

            <h2 className="text-heading font-bold text-text mb-6">Expertise</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Product Marketing Strategy</li>
              <li>Content Strategy and Creation</li>
              <li>Digital Marketing Campaigns</li>
              <li>Community Management</li>
              <li>Brand Storytelling</li>
              <li>SEO and SEM</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Experience</h2>
            <p className="text-subheading text-text-muted mb-12">Throughout my career, I've worked with startups and established brands, helping them establish strong market positions through innovative marketing strategies. My work has resulted in significant increases in brand awareness, customer engagement, and revenue growth.</p>

            <div className="text-center">
              <Button href="/">Back to Home</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">&copy; 2023 NDINDA MWANZA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}