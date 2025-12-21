import Image from 'next/image';

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg border border-border">
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}