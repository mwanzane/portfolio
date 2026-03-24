import Head from 'next/head';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import FeaturedCard from '@/components/FeaturedCard';

export default function Services() {
  const servicesData = [
    {
      title: "Account/Community Management",
      description: "Manage social media accounts and build engaged communities. I handle content scheduling, audience interaction, and growth strategies to foster loyal followers and drive engagement.",
      thumbnail: "https://picsum.photos/400/300?random=5"
    },
    {
      title: "Content Strategy",
      description: "Develop comprehensive content strategies tailored to your brand. From ideation to execution, I ensure your content resonates with audiences and achieves business goals.",
      thumbnail: "https://picsum.photos/400/300?random=6"
    },
    {
      title: "Digital Marketing",
      description: "Execute effective digital marketing campaigns across platforms. I optimize for SEO, run paid ads, and analyze performance to maximize ROI and reach.",
      thumbnail: "https://picsum.photos/400/300?random=7"
    },
    {
      title: "Product Marketing",
      description: "Position products for success with compelling narratives and go-to-market strategies. I collaborate with teams to launch products that stand out in competitive markets.",
      thumbnail: "https://picsum.photos/400/300?random=8"
    }
  ];

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
          <p className="text-subhero text-text-muted mb-8 text-center max-w-2xl mx-auto">I offer a range of professional services to help businesses and individuals succeed in marketing, content, and community building.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <img src={service.thumbnail} alt={service.title} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold text-text mb-4">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/">Back to Home</Button>
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
    </>
  )
}