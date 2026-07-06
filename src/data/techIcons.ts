/** Devicon + Simple Icons — verified CDN paths */

export interface TechIconConfig {
  name: string;
  devicon?: string;
  simpleIcon?: string;
}

export const deviconUrl = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

export const simpleIconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const iconByName: Record<string, TechIconConfig> = {
  React: { name: 'React', devicon: 'react/react-original' },
  'React 19': { name: 'React 19', devicon: 'react/react-original' },
  'React Query': { name: 'React Query', devicon: 'react/react-original', simpleIcon: 'reactquery' },
  'Next.js': { name: 'Next.js', devicon: 'nextjs/nextjs-original' },
  'Next.js 14': { name: 'Next.js 14', devicon: 'nextjs/nextjs-original' },
  'Next.js 14/15': { name: 'Next.js 14/15', devicon: 'nextjs/nextjs-original' },
  'Next.js 15': { name: 'Next.js 15', devicon: 'nextjs/nextjs-original' },
  TypeScript: { name: 'TypeScript', devicon: 'typescript/typescript-original' },
  'JavaScript (ES6+)': { name: 'JavaScript (ES6+)', devicon: 'javascript/javascript-original' },
  JavaScript: { name: 'JavaScript', devicon: 'javascript/javascript-original' },
  HTML5: { name: 'HTML5', devicon: 'html5/html5-original' },
  CSS3: { name: 'CSS3', devicon: 'css3/css3-original' },
  'Tailwind CSS': { name: 'Tailwind CSS', devicon: 'tailwindcss/tailwindcss-original', simpleIcon: 'tailwindcss' },
  'Responsive Design': { name: 'Responsive Design', devicon: 'css3/css3-original', simpleIcon: 'figma' },
  NestJS: { name: 'NestJS', devicon: 'nestjs/nestjs-original', simpleIcon: 'nestjs' },
  'Express.js': { name: 'Express.js', devicon: 'express/express-original', simpleIcon: 'express' },
  Express: { name: 'Express', devicon: 'express/express-original', simpleIcon: 'express' },
  'Node.js': { name: 'Node.js', devicon: 'nodejs/nodejs-original' },
  'REST APIs': { name: 'REST APIs', devicon: 'swagger/swagger-original' },
  PHP: { name: 'PHP', devicon: 'php/php-original' },
  Django: { name: 'Django', devicon: 'django/django-plain' },
  PostgreSQL: { name: 'PostgreSQL', devicon: 'postgresql/postgresql-original' },
  MySQL: { name: 'MySQL', devicon: 'mysql/mysql-original' },
  MongoDB: { name: 'MongoDB', devicon: 'mongodb/mongodb-original' },
  'Prisma ORM': { name: 'Prisma ORM', devicon: 'prisma/prisma-original', simpleIcon: 'prisma' },
  Prisma: { name: 'Prisma', devicon: 'prisma/prisma-original', simpleIcon: 'prisma' },
  JWT: { name: 'JWT', simpleIcon: 'jsonwebtokens' },
  OAuth2: { name: 'OAuth2', simpleIcon: 'openid' },
  NextAuth: { name: 'NextAuth', simpleIcon: 'openid' },
  'Role-Based Access Control': { name: 'Role-Based Access Control', simpleIcon: 'keycloak' },
  RBAC: { name: 'RBAC', simpleIcon: 'keycloak' },
  AWS: { name: 'AWS', devicon: 'amazonwebservices/amazonwebservices-plain-wordmark' },
  'AWS Deployment': { name: 'AWS Deployment', devicon: 'amazonwebservices/amazonwebservices-plain-wordmark' },
  'Cloud Computing (AWS)': { name: 'Cloud Computing (AWS)', devicon: 'amazonwebservices/amazonwebservices-plain-wordmark' },
  Docker: { name: 'Docker', devicon: 'docker/docker-original' },
  Redis: { name: 'Redis', devicon: 'redis/redis-original' },
  Git: { name: 'Git', devicon: 'git/git-original' },
  GitHub: { name: 'GitHub', devicon: 'github/github-original' },
  Linux: { name: 'Linux', devicon: 'linux/linux-original' },
  Vercel: { name: 'Vercel', devicon: 'vercel/vercel-original', simpleIcon: 'vercel' },
  'Socket.IO': { name: 'Socket.IO', devicon: 'socketio/socketio-original', simpleIcon: 'socketdotio' },
  'Manual Testing': { name: 'Manual Testing', simpleIcon: 'selenium' },
  SDLC: { name: 'SDLC', devicon: 'azure/azure-original', simpleIcon: 'confluence' },
  STLC: { name: 'STLC', devicon: 'gitlab/gitlab-original', simpleIcon: 'testinglibrary' },
  Agile: { name: 'Agile', devicon: 'jira/jira-original', simpleIcon: 'jira' },
  'API Testing': { name: 'API Testing', devicon: 'insomnia/insomnia-original', simpleIcon: 'insomnia' },
  Postman: { name: 'Postman', devicon: 'postman/postman-original' },
  'CI/CD': { name: 'CI/CD', devicon: 'githubactions/githubactions-original' },
  'System Design': { name: 'System Design', devicon: 'graphql/graphql-plain' },
  'Software Architecture': { name: 'Software Architecture', devicon: 'kubernetes/kubernetes-plain' },
  'Automated Testing': { name: 'Automated Testing', devicon: 'jest/jest-plain', simpleIcon: 'cypress' },
  'Quality Assurance': { name: 'Quality Assurance', devicon: 'jest/jest-plain', simpleIcon: 'cypress' },
  'Distributed Systems': { name: 'Distributed Systems', devicon: 'kubernetes/kubernetes-plain' },
  Microservices: { name: 'Microservices', devicon: 'docker/docker-original' },
  DevOps: { name: 'DevOps', devicon: 'jenkins/jenkins-original' },
  'Authentication & Authorization': { name: 'Authentication & Authorization', simpleIcon: 'keycloak' },
  'Performance Optimization': { name: 'Performance Optimization', devicon: 'nginx/nginx-original' },
  Python: { name: 'Python', devicon: 'python/python-original' },
  Java: { name: 'Java', devicon: 'java/java-original' },
  JavaFX: { name: 'JavaFX', devicon: 'java/java-original' },
};

export const getTechIconConfig = (name: string): TechIconConfig => {
  if (iconByName[name]) return iconByName[name];

  const normalized = name.toLowerCase();
  const match = Object.entries(iconByName).find(([key]) => {
    const k = key.toLowerCase();
    return normalized.includes(k) || k.includes(normalized);
  });

  return match?.[1] ?? { name, devicon: 'devicon/devicon-original' };
};

/** @deprecated use getTechIconConfig — kept for TechBadge compatibility */
export const getTechIcon = (name: string): string => {
  const config = getTechIconConfig(name);
  return config.devicon ?? config.simpleIcon ?? 'devicon/devicon-original';
};

export const techIconMap: Record<string, string> = Object.fromEntries(
  Object.entries(iconByName).map(([key, value]) => [key, value.devicon ?? value.simpleIcon ?? ''])
);

const toItem = (config: TechIconConfig) => ({
  name: config.name,
  devicon: config.devicon,
  simpleIcon: config.simpleIcon,
});

export const skillCategoryGroups = [
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js 14/15',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'React Query',
    ].map((name) => toItem(getTechIconConfig(name))),
  },
  {
    label: 'Backend',
    items: ['NestJS', 'Express.js', 'Node.js', 'REST APIs', 'PHP', 'Django'].map((name) =>
      toItem(getTechIconConfig(name))
    ),
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'].map((name) =>
      toItem(getTechIconConfig(name))
    ),
  },
  {
    label: 'Authentication',
    items: ['JWT', 'OAuth2', 'NextAuth', 'Role-Based Access Control'].map((name) =>
      toItem(getTechIconConfig(name))
    ),
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Redis', 'Git', 'GitHub', 'Linux', 'Vercel'].map((name) =>
      toItem(getTechIconConfig(name))
    ),
  },
  {
    label: 'Testing & QA',
    items: ['Manual Testing', 'SDLC', 'STLC', 'Agile', 'API Testing', 'Postman'].map((name) =>
      toItem(getTechIconConfig(name))
    ),
  },
] as const;

export const heroTechStack: TechIconConfig[] = [
  getTechIconConfig('React'),
  getTechIconConfig('Next.js'),
  getTechIconConfig('TypeScript'),
  getTechIconConfig('NestJS'),
  getTechIconConfig('PostgreSQL'),
  getTechIconConfig('Docker'),
];
