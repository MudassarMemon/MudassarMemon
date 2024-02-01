import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  officebook,
  tuneup,
  bst,
  pls,
  nyeusi,
  space,
  ewh,
  memolope,
  tahtan,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Intern Engineer',
    company_name: 'Tahtan General Contracting',
    icon: tahtan,
    iconBg: '#333333',
    date: 'Dec 2015 - Jan 2016',
  },
  {
    title: 'Assistant Project Estimator',
    company_name: 'EW Howell',
    icon: ewh,
    iconBg: '#333333',
    date: 'May 2016 - May 2017',
  },
  {
    title: 'Project Manager',
    company_name: 'EW Howell',
    icon: ewh,
    iconBg: '#333333',
    date: 'Aug 2017 - Jun 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Memolope',
    icon: memolope,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Officebook',
    description: 'A full stack web application clone of Facebook with a dynamic user interface and a theme inspired by NBC’s, ‘The Office’.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: officebook,
    repo: 'https://github.com/MudassarMemon/Officebook',
    demo: 'https://officebook-3392aeaf91bd.herokuapp.com/',
  },
  {
    id: 'project-2',
    name: 'TuneUp',
    description:
      'A digital hub designed to connect musicians with one another; meet up for jam sessions or even form a band.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: tuneup,
    repo: 'https://github.com/danielhlee4/TuneUp',
    demo: 'https://tuneup-twco.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'BST Visualizer',
    description: 'A single-page web application offering lessons on binary search trees with lessons and an interactive sandbox environment.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bst,
    repo: 'https://github.com/MudassarMemon/Binary-Search-Tree-Visualizer',
    demo: 'https://mudassarmemon.github.io/Binary-Search-Tree-Visualizer/',
  },
  {
    id: 'project-4',
    name: 'PLS Mechanical',
    description: `An HVAC contractor web application serving to streamline B2C communications, schedule appointments, learn about services offered and more.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pls,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
