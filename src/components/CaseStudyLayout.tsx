import { ReactNode } from 'react';

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}