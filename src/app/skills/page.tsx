import Header from '@/components/Header';
import Head from 'next/head';
import { Button } from '@/components/Button';
import FeaturedCard from '@/components/FeaturedCard';

export default function Skills() {
  const skillsData = [
    {
      title: "Technical",
      thumbnail: "https://picsum.photos/400/300?random=1",
      featuredTags: [
        { text: "Systems Analyst", href: "/skills/systems-analyst" },
        { text: "Business Development", href: "/skills/business-development" },
        { text: "Operations", href: "/skills/operations" },
        { text: "Independent Projects", href: "/skills/independent-projects" }
      ],
      learnMoreHref: "/skills/systems-analyst"
    },
    {
      title: "Content Strategy/Digital Marketing",
      thumbnail: "https://picsum.photos/400/300?random=2",
      featuredTags: [
        { text: "Redkite Candy", href: "/skills/redkite-candy" },
        { text: "Replom", href: "/skills/replom" }
      ],
      learnMoreHref: "/skills/redkite-candy"
    },
    {
      title: "Communications and Social Media",
      thumbnail: "https://picsum.photos/400/300?random=3",
      featuredTags: [
        { text: "Office of Residential Life at Dartmouth", href: "/skills/allen-house" },
        { text: "My Social Media", href: "/skills/my-social-media" }
      ],
      learnMoreHref: "/skills/allen-house"
    }
  ];

  return (
    <>
      <Head>
        <title>Skills/Projects - Technical & Creative Expertise | NDINDA MWANZA</title>
        <meta name="description" content="Discover skills in technical analysis, business development, operations, and independent projects. Explore creative and strategic capabilities." />
      </Head>
      <div className="min-h-screen bg-background">
      <Header />

      {/* Skills Content */}
      <main className="py-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-hero font-bold text-text mb-12 text-center">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <FeaturedCard
                key={skill.title}
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

      {/* Need a Quick Answer Card */}
      <div className="mt-12 p-6 bg-surface border border-border rounded-lg text-center max-w-2xl mx-auto">
        <h3 className="text-subheading font-bold text-text mb-4">Need a Quick Answer?</h3>
        <p className="text-text-muted mb-6">
          For paid questions or consulting, check out Replom.
        </p>
        <a
          href="https://replom.com/ask/ndinda-f3089466"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-surface border border-primary text-primary rounded-lg hover:bg-primary hover:text-surface transition-smooth"
        >
          Ask a Paid Question
        </a>
      </div>

      </div>
    </>
  )
}