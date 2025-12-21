import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import Tag from './Tag';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-1">
      <Image src={project.thumbnail} alt={project.title} width={600} height={300} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-heading font-bold mb-3 text-text">{project.title}</h3>
        <p className="text-subheading text-text-muted mb-3">Role: {project.role}</p>
        <div className="mb-4">
          {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <p className="text-subheading text-text-muted mb-6">{project.summary}</p>
        <Link href={`/case-study/${project.slug}`} className="text-primary hover:text-primary-hover font-medium link-underline">
          Read Case Study →
        </Link>
      </div>
    </div>
  );
}