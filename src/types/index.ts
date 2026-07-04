export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  featured?: boolean;
  githubUrl: string;
  image: string;
  demoUrl: string;
}
