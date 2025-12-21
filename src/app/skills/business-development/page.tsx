import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function BusinessDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Business Development Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Business Development</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">As Business Development Lead at Mobisky Innovations Limited, I drove growth by identifying opportunities, building relationships, and closing deals.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Researched and created new leads; revived 50 dead leads, accelerating pipeline growth and accomplishing 5% to 10% conversion rates.</li>
              <li>Evaluated client needs of 200+ leads to define problem scope, demonstrated applications to 100+ clients, and reported to in-house development team.</li>
              <li>Trained new clients to ensure satisfaction with administered product solutions and developed negotiating strategies by aligning prospect’s requirements with company objectives and procedures.</li>
              <li>Supervised timely and successful deployment of solutions.</li>
              <li>Used CRM to increase sales, improve sales forecasting, and enhance account tracking on new and existing clients.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Revitalized stagnant leads, improved conversion rates, and enhanced sales processes through CRM utilization and strategic client management.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">Mobisky Innovations Limited – Collaborated with sales teams, clients, and internal development staff to expand market reach.</p>

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