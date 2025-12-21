import Head from 'next/head';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Product Marketing & Content Strategy | NDINDA MWANZA</title>
        <meta name="description" content="Explore professional services in account/community management, content strategy, digital marketing, and product marketing. Expert consulting for growth and storytelling." />
      </Head>
      <div className="min-h-screen bg-background">
      <Header />

      {/* Services Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Services</h1>
          <div className="prose prose-lg mx-auto text-text">
            <p className="text-subhero text-text-muted mb-8">I offer a range of professional services to help businesses and individuals succeed in marketing, content, and community building.</p>

            <h2 id="account-community" className="text-heading font-bold text-text mb-6">Account/Community Management</h2>
            <p className="text-subheading text-text-muted mb-8">Manage social media accounts and build engaged communities. I handle content scheduling, audience interaction, and growth strategies to foster loyal followers and drive engagement.</p>

            <h2 id="content-strategy" className="text-heading font-bold text-text mb-6">Content Strategy</h2>
            <p className="text-subheading text-text-muted mb-8">Develop comprehensive content strategies tailored to your brand. From ideation to execution, I ensure your content resonates with audiences and achieves business goals.</p>

            <h2 id="digital-marketing" className="text-heading font-bold text-text mb-6">Digital Marketing</h2>
            <p className="text-subheading text-text-muted mb-8">Execute effective digital marketing campaigns across platforms. I optimize for SEO, run paid ads, and analyze performance to maximize ROI and reach.</p>

            <h2 id="product-marketing" className="text-heading font-bold text-text mb-6">Product Marketing</h2>
            <p className="text-subheading text-text-muted mb-12">Position products for success with compelling narratives and go-to-market strategies. I collaborate with teams to launch products that stand out in competitive markets.</p>

            <div className="text-center">
              <Button href="/">Back to Home</Button>
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
    </>
  )
}