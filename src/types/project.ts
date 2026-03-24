export interface Project {
  title: string;
  role: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  featuredTags: string[];
  skillsHref: string;
  learnMoreHref: string;
  showLearnMore?: boolean;
  summary: string;
  challenge: string;
  strategy: string[];
  results: string[];
  featuredInSkills?: string[];
}