/** Devicon paths — https://devicon.dev */

export interface TechIconConfig {
  name: string;
  icon: string;
}

export const deviconUrl = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

/** Lookup by exact or partial skill / tech name */
export const techIconMap: Record<string, string> = {
  React: 'react/react-original',
  'React 19': 'react/react-original',
  'React Query': 'react/react-original',
  'Next.js': 'nextjs/nextjs-original',
  'Next.js 14': 'nextjs/nextjs-original',
  'Next.js 14/15': 'nextjs/nextjs-original',
  'Next.js 15': 'nextjs/nextjs-original',
  TypeScript: 'typescript/typescript-original',
  'JavaScript (ES6+)': 'javascript/javascript-original',
  JavaScript: 'javascript/javascript-original',
  HTML5: 'html5/html5-original',
  CSS3: 'css3/css3-original',
  'Tailwind CSS': 'tailwindcss/tailwindcss-plain',
  'Responsive Design': 'bootstrap/bootstrap-original',
  NestJS: 'nestjs/nestjs-plain',
  'Express.js': 'express/express-original',
  Express: 'express/express-original',
  'Node.js': 'nodejs/nodejs-original',
  'REST APIs': 'swagger/swagger-original',
  PHP: 'php/php-original',
  Django: 'django/django-plain',
  PostgreSQL: 'postgresql/postgresql-original',
  MySQL: 'mysql/mysql-original',
  MongoDB: 'mongodb/mongodb-original',
  'Prisma ORM': 'prisma/prisma-original',
  Prisma: 'prisma/prisma-original',
  JWT: 'json/json-original',
  OAuth2: 'auth0/auth0-original',
  NextAuth: 'nextauth/nextauth-original',
  'Role-Based Access Control': 'firebase/firebase-plain',
  RBAC: 'firebase/firebase-plain',
  AWS: 'amazonwebservices/amazonwebservices-original',
  'AWS Deployment': 'amazonwebservices/amazonwebservices-original',
  'Cloud Computing (AWS)': 'amazonwebservices/amazonwebservices-original',
  Docker: 'docker/docker-original',
  Redis: 'redis/redis-original',
  Git: 'git/git-original',
  GitHub: 'github/github-original',
  Linux: 'linux/linux-original',
  Vercel: 'vercel/vercel-original',
  'Socket.IO': 'socketio/socketio-original',
  'Manual Testing': 'cypress/cypress-plain',
  SDLC: 'azure/azure-original',
  STLC: 'gitlab/gitlab-original',
  Agile: 'jira/jira-original',
  'API Testing': 'insomnia/insomnia-original',
  Postman: 'postman/postman-original',
  'CI/CD': 'githubactions/githubactions-original',
  'System Design': 'graphql/graphql-plain',
  'Software Architecture': 'kubernetes/kubernetes-plain',
  'Automated Testing': 'jest/jest-plain',
  'Quality Assurance': 'jest/jest-plain',
  'Distributed Systems': 'kubernetes/kubernetes-plain',
  Microservices: 'docker/docker-original',
  DevOps: 'jenkins/jenkins-original',
  'Authentication & Authorization': 'auth0/auth0-original',
  'Performance Optimization': 'nginx/nginx-original',
  Python: 'python/python-original',
  Java: 'java/java-original',
  JavaFX: 'java/java-original',
};

export const getTechIcon = (name: string): string => {
  if (techIconMap[name]) return techIconMap[name];

  const normalized = name.toLowerCase();
  const match = Object.entries(techIconMap).find(([key]) => {
    const k = key.toLowerCase();
    return normalized.includes(k) || k.includes(normalized);
  });

  return match?.[1] ?? 'devicon/devicon-original';
};

export const skillCategoryGroups = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Next.js 14/15', icon: 'nextjs/nextjs-original' },
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'JavaScript (ES6+)', icon: 'javascript/javascript-original' },
      { name: 'HTML5', icon: 'html5/html5-original' },
      { name: 'CSS3', icon: 'css3/css3-original' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-plain' },
      { name: 'Responsive Design', icon: 'bootstrap/bootstrap-original' },
      { name: 'React Query', icon: 'react/react-original' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'NestJS', icon: 'nestjs/nestjs-plain' },
      { name: 'Express.js', icon: 'express/express-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'REST APIs', icon: 'swagger/swagger-original' },
      { name: 'PHP', icon: 'php/php-original' },
      { name: 'Django', icon: 'django/django-plain' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'MySQL', icon: 'mysql/mysql-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'Prisma ORM', icon: 'prisma/prisma-original' },
    ],
  },
  {
    label: 'Authentication',
    items: [
      { name: 'JWT', icon: 'json/json-original' },
      { name: 'OAuth2', icon: 'auth0/auth0-original' },
      { name: 'NextAuth', icon: 'nextauth/nextauth-original' },
      { name: 'Role-Based Access Control', icon: 'firebase/firebase-plain' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original' },
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'Redis', icon: 'redis/redis-original' },
      { name: 'Git', icon: 'git/git-original' },
      { name: 'GitHub', icon: 'github/github-original' },
      { name: 'Linux', icon: 'linux/linux-original' },
      { name: 'Vercel', icon: 'vercel/vercel-original' },
    ],
  },
  {
    label: 'Testing & QA',
    items: [
      { name: 'Manual Testing', icon: 'cypress/cypress-plain' },
      { name: 'SDLC', icon: 'azure/azure-original' },
      { name: 'STLC', icon: 'gitlab/gitlab-original' },
      { name: 'Agile', icon: 'jira/jira-original' },
      { name: 'API Testing', icon: 'insomnia/insomnia-original' },
      { name: 'Postman', icon: 'postman/postman-original' },
    ],
  },
] as const;

export const heroTechStack: TechIconConfig[] = [
  { name: 'React', icon: 'react/react-original' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original' },
  { name: 'TypeScript', icon: 'typescript/typescript-original' },
  { name: 'NestJS', icon: 'nestjs/nestjs-plain' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
  { name: 'Docker', icon: 'docker/docker-original' },
];
