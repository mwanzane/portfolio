import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

  return (
    <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xl font-bold text-primary link-underline uppercase tracking-wide">
          <div className="relative mr-10">
            <Image
              src="/pictures/headshot.jpg"
              alt="NDINDA MWANZA headshot"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full overflow-hidden"
            />
            <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(0deg) translateY(-60px)' }}>P</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(45deg) translateY(-60px)' }}>O</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(90deg) translateY(-60px)' }}>R</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(135deg) translateY(-60px)' }}>T</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(180deg) translateY(-60px)' }}>F</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(225deg) translateY(-60px)' }}>O</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(270deg) translateY(-60px)' }}>L</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(315deg) translateY(-60px)' }}>I</span>
              <span className="absolute text-xs" style={{ color: '#005939', transform: 'rotate(360deg) translateY(-60px)' }}>O</span>
            </div>
          </div>
          NDINDA MWANZA
        </Link>
      <nav className="hidden md:flex space-x-8 items-center">
        <Link href="/about" className="text-text hover:text-primary transition-smooth link-underline">About</Link>
        <Link href="/services" className="text-text hover:text-primary transition-smooth link-underline">Services</Link>
        <Link href="/skills" className="text-text hover:text-primary transition-smooth link-underline">Skills/Projects</Link>
        <Link href="/contact" className="text-text hover:text-primary transition-smooth link-underline">Contact</Link>
        <Link
          href="https://replom.com/ask/ndinda-f3089466"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-primary transition-smooth link-underline text-sm"
        >
          Get paid for your expertise
        </Link>
      </nav>
    </div>
  );
}