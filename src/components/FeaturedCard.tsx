import Link from 'next/link';

interface FeaturedCardProps {
  thumbnail: string;
  title: string;
  featuredTags: { text: string; href: string; style?: React.CSSProperties; className?: string }[];
  learnMoreHref?: string;
  showLearnMore?: boolean;
  index: number;
}

export default function FeaturedCard({ thumbnail, title, featuredTags, learnMoreHref, showLearnMore = false, index }: FeaturedCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center border border-red-200 hover:border-red-500 transition-colors p-4 rounded">
      <img src={thumbnail} alt={title} className={`w-full md:w-1/2 h-80 object-cover rounded ${index % 2 === 0 ? 'order-1' : 'order-2'}`} />
      <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left order-2' : 'md:text-right order-1'}`}>
         <h3 className="text-2xl font-bold text-text mb-4">{title}</h3>
         <div className="flex flex-wrap gap-2 justify-center mb-4">
           {featuredTags.map(tag => (
             <Link key={tag.text} href={tag.href} style={tag.style} className={`inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-red-500 hover:text-white border border-red-200 shadow-lg ${tag.className || 'text-sm'}`}>{tag.text}</Link>
           ))}
         </div>
          {showLearnMore && learnMoreHref && (
            <div className="flex justify-center mt-4">
              <a href={learnMoreHref} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary text-surface hover:bg-primary/80 border border-primary text-sm shadow-lg rounded">Learn More</a>
            </div>
           )}

                        </div>
                     </div>
                );
}