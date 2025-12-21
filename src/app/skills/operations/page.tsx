import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function Operations() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Operations Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Operations</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">As Operations Coordinator at React Cert Africa Limited, I streamlined processes and improved efficiency in certificate processing and client management.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Facilitated implementation of Quality Management system that boosted productivity by 30%.</li>
              <li>Co-ordinated operations within departments to promote efficiency, reducing allowances by 10%.</li>
              <li>Managed sensitive client data, decreasing total certificate processing turnaround time from one month to two weeks, increasing revenue by 10%, and improving customer satisfaction.</li>
              <li>Developed report template to improve organization’s weekly reporting structure, later adopted internally.</li>
              <li>Organized first regional client meeting to strengthen business-to-clientele relations and enhance customer retention.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Reduced processing times, increased revenue, and enhanced client relationships through process improvements and strategic coordination.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">React Cert Africa Limited – Worked with departments, clients, and management to optimize operations and service delivery.</p>

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