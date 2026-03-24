import Head from 'next/head';
import Header from '@/components/Header';
import { Button } from '@/components/Button';
import FeaturedCard from '@/components/FeaturedCard';

export default function Skills() {
  const skillsData = [
    {
      title: "Digital Marketing",
      thumbnail: "https://picsum.photos/400/300?random=1",
      featuredTags: [
        { text: "Portfolio", href: "/portfolio/digital-marketing", style: { color: '#005939' }, className: 'text-sm uppercase' }
      ],
      learnMoreHref: "/portfolio/digital-marketing",
      showLearnMore: false
    },
    {
      title: "Content Strategy",
      thumbnail: "https://picsum.photos/400/300?random=2",
      featuredTags: [
        { text: "Portfolio", href: "/portfolio/content-strategy", style: { color: '#005939' }, className: 'text-sm uppercase' }
      ],
      learnMoreHref: "/portfolio/content-strategy",
      showLearnMore: false
    },
    {
      title: "Communications & Social Media",
      thumbnail: "https://picsum.photos/400/300?random=3",
      featuredTags: [
        { text: "Portfolio", href: "/portfolio/communications-social-media", style: { color: '#005939' }, className: 'text-sm uppercase' }
      ],
      learnMoreHref: "/portfolio/communications-social-media",
      showLearnMore: false
    },
    {
      title: "Product Marketing",
      thumbnail: "https://picsum.photos/400/300?random=4",
      featuredTags: [
        { text: "Portfolio", href: "/portfolio/product-marketing", style: { color: '#005939' }, className: 'text-sm uppercase' }
      ],
      learnMoreHref: "/portfolio/product-marketing",
      showLearnMore: false
    }
  ];

  return (
    <>
      <Head>
        <title>Skills & Projects - NDINDA MWANZA | Product Marketing & Content Strategy</title>
        <meta name="description" content="Explore NDINDA MWANZA's skills in product marketing, content strategy, digital marketing, and communications. View featured projects and portfolios." />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="py-section">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-xl font-bold mb-12 text-center uppercase tracking-wide" style={{color: '#005939'}}>Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.map((skill, index) => (
                <FeaturedCard
                  key={index}
                  thumbnail={skill.thumbnail}
                  title={skill.title}
                  featuredTags={skill.featuredTags}
                  learnMoreHref={skill.learnMoreHref}
                  index={index}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/">Back to Home</Button>
            </div>
          </div>
        </main>

        <footer className="bg-surface border-t border-border pt-16 pb-8 border-b border-red-500">
          <div className="container mx-auto px-6 text-center">
            <p className="text-text-muted">&copy; 2025 NDINDA MWANZA. All rights reserved.</p>
          </div>
        </footer>
        <div className="h-4 bg-red-500"></div>
      </div>
    </>
  );
}