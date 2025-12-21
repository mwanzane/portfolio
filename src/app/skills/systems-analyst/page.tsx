import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function SystemsAnalyst() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Systems Analyst Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Systems Analyst</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">As a Systems Analyst at Software Dynamics, I focused on bridging technical and business needs to deliver efficient systems solutions.</p>

            <h2 className="text-heading font-bold text-text mb-6">Responsibilities</h2>
            <ul className="text-subheading text-text-muted mb-8 space-y-2">
              <li>Coordinated with internal and external stakeholders to establish project scope, system goals, and requirements.</li>
              <li>Configured, managed, and monitored customer cloud accounts on PaaS, SaaS, and IaaS.</li>
              <li>Developed, analyzed, and organized requirement specifications, data mapping, diagrams, and flowcharts for developers and testers.</li>
              <li>Facilitated business process reviews and developer walkthroughs based on business development.</li>
              <li>Translated highly technical specifications into clear non-technical requirements.</li>
              <li>Managed the setup and configuration of systems.</li>
              <li>Defined and coordinated the execution of testing procedures and developed test cases for quality assurance.</li>
              <li>Provided accurate and timely documentation of all processes and training as needed.</li>
            </ul>

            <h2 className="text-heading font-bold text-text mb-6">Achievements</h2>
            <p className="text-subheading text-text-muted mb-8">Successfully delivered systems that met business objectives, improving efficiency and reducing technical barriers through clear communication and documentation.</p>

            <h2 className="text-heading font-bold text-text mb-6">Who I Worked With</h2>
            <p className="text-subheading text-text-muted mb-12">Software Dynamics – Collaborated with development teams, stakeholders, and clients to align technical solutions with business goals.</p>

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