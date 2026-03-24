import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - NDINDA MWANZA | Product Marketing & Content Strategy Expert</title>
        <meta name="description" content="Learn about NDINDA MWANZA's background in product marketing, content strategy, and digital growth. Experience in startups, brands, and creative storytelling." />
      </Head>
      <div className="min-h-screen bg-background">
      <Header />

      {/* About Content */}
       <main className="py-section">
         <div className="container mx-auto px-6 max-w-4xl">
           {/* Hero Section */}
           <div className="w-full mb-12">
             <Image
               src="/hi my name.png"
               alt="Hi, my name is NDINDA MWANZA"
               width={1200}
               height={600}
               className="w-full h-auto"
             />
           </div>
           <h1 className="text-hero font-bold text-text mb-12 text-center">About Me</h1>
            <div className="prose prose-lg mx-auto text-text">
              <p className="text-subhero text-text-muted mb-6">I am a poet and prose writer from Kenya, currently submitting my creative writing thesis for the MALS program at Dartmouth.</p>

              <p className="text-body text-text-muted mb-6">I have had the privilege to work with <a href="https://english.dartmouth.edu/people/vievee-francis" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prof. Vievee Francis</a> on this project, who has nurtured my practice. With her, I have learnt to prioritize accuracy over cleverness—an approach that shapes how I approach my work. I strive to listen deeply, to understand what truly matters to people and why, ensuring we hear each other clearly.</p>

              <p className="text-body text-text-muted mb-6">This philosophy extends to my marketing work through a narrative-led approach. It opens possibilities for crafting brand stories that resonate deeply, fostering empathy and connection. While the stakes are high—if narratives miss the mark, they can alienate rather than engage—the benefits are significant: stronger customer loyalty, market differentiation, and positive contributions to users' lives. This aligns seamlessly with my use of interactive methods like zines to bring stories to life.</p>

              <p className="text-body text-text-muted mb-6">In my professional practice, I leverage AI, as demonstrated in this web app, to align perfectly with clients' needs and deliver precisely what's required. I have a particular preference for interactive marketing, adapting it to various contexts—whether through a zine or voice overlays in post-production. My goal is to create work that benefits both brands and their users positively.</p>

              <p className="text-body text-text-muted mb-12">I believe that even though we pursue different paths, we all exist within shared circles of connection. I want to exist in these circles. Customer satisfaction remains my utmost priority.</p>

            <div className="text-center">
              <Button href="/">Back to Home</Button>
            </div>
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