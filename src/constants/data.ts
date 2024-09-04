import { IoMdMail } from 'react-icons/io'
import {
  certificate_meta,
  certificate_google,
  certificate_react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  azuredevops,
  mongodb,
  git,
  threejs,
  c,
  netmvc,
  meta,
  ust,
  google,
  certificate_hardware,
  ibm,
  certificate_cloud,
  lex247_small,
  sevenpeaks_small,
  smartcranes,
  t_film,
  artshop,
  artshop2,
  t_film2,
} from '../assets'
import {
  CertificateData,
  ExperienceData,
  LinkData,
  NavState,
  PassionData,
  PassionType,
  ProjectData,
  SkillType,
} from './type'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export const Mobile = 768
export const XLDesktop = 1536

export const validEmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const navData = [
  { id: NavState.Passion, title: 'About' },
  { id: NavState.Experience, title: 'Works' },
  { id: NavState.Project, title: 'Projects' },
  { id: NavState.Certificate, title: 'Certificates' },
  { id: NavState.Contact, title: 'Contact' },
]

export const linkToProfiles = [
  { title: 'Github', icon: FaGithub, link: 'https://github.com/tarpruksa' },
  {
    title: 'Linkedin',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/pittayah-pruksacholavit-7798a0228',
  },
  {
    title: 'Instragram',
    icon: FaInstagramSquare,
    link: 'https://www.instagram.com/tarpruksa/',
  },
  // { title: 'Mail', icon: IoMdMail, link: '' },
] as LinkData[]

export const passion = [
  {
    title: 'Design',
    detail:
      'Crafting Experiences - I love creating intuitive, beautiful interfaces that make users happy and engaged.',
    type: PassionType.Design,
  },
  { title: 'Gap' },
  {
    title: 'Build',
    detail:
      'Creating Solutions - I enjoy building strong, scalable applications that look good and work great.',
    type: PassionType.Build,
  },
  { title: 'Gap' },
  {
    title: 'Connect',
    detail:
      'Bridging Technologies - I’m all about connecting the right tech to make digital experiences smooth and interactive.',
    type: PassionType.Connect,
  },
] as PassionData[]

export const experiences = [
  {
    title: 'Frontend Web Developer',
    company: 'Seven Peaks Software',
    icon: sevenpeaks_small,
    date: 'June 2023 - Present',
    link: 'https://sevenpeakssoftware.com/',
    details: [
      'Successfully upgraded applications to comply with EU GDPR standards, implementing advanced data masking and encryption techniques to safeguard sensitive information.',
      'Connected and integrated to Outlook 365 APIs, enabling seamless access to calendars, calls, and emails for over 100+ users, enhancing productivity and user experience.',
      'Designed a server-side React component module supporting nested objects using recursive methods, improving code efficiency and maintainability.',
      'Consistently delivered high-quality features and enhancements ahead of sprint deadlines, earning recognition and praise from the management team for exceptional performance.',
      'Actively participated in code reviews, providing constructive feedback to peers and fostering a collaborative development environment.',
    ],
    stacks: ['React', 'Redux', 'Typescript', 'C#', '.NET MVC', 'LINQ'],
  },
  {
    title: 'Frontend Web Developer',
    company: 'LEX247',
    icon: lex247_small,
    date: 'June 2022 - June 2023',
    link: 'https://lex247.com/',
    details: [
      'Enhanced application performance by 30% by upgrading from ASP.NET Core MVC to React.js.',
      'Developed a new Control Panel for admin users, enabling micro-management of over 20 different collections within the system.',
      'Implemented server-side pagination, searchable and sortable React tables, and multi-language form fields using React Form Hook.',
      'Delivered new features for an enterprise law firm with 500+ daily users, including:',
      "-Testamentsförvaring - A feature designed to assist lawyers in managing their client's testaments.",
      '-Time Bank - A comprehensive solution for managing insurance and time value.',
    ],
    stacks: ['React', 'Typescript', 'Javascript', 'HTML & CSS', 'JQuery'],
  },
  {
    title: 'Electrical Engineer',
    company: 'Smart Cranes',
    icon: smartcranes,
    date: 'Aug 2017 - June 2022',
    details: [
      'Designed and optimized electrical circuits for industrial-grade wireless remote control systems, contributing to enhanced operational efficiency and reliability.',
      'Managed the entire lifecycle of hardware and software projects, from conceptual design and component selection to configuration and programming, ensuring seamless project execution.',
      'Provided expert technical support and service coordination, leading on-site job execution to meet client needs and exceed performance expectations.',
    ],
  },
] as ExperienceData[]

export const projects = [
  {
    title: 'T-film',
    imgs: [t_film, t_film2],
    link: 'https://t-film.netlify.app',
    github: 'https://github.com/tarpruksa/T-film',
    stacks: ['React', 'Redux', 'Alan AI'],
    details: [
      'A collection of up-to-date movies details, connected to IMDb APIs.',
      'Voice recognition command by Alan AI (can use to navigate through the site).',
      'Login and Autheticated with IMDB.',
      'Add to favourites, Save to watch later.',
    ],
  },
  {
    title: 'Art Shop',
    imgs: [artshop, artshop2],
    github: 'https://github.com/tarpruksa/Art-Shop',
    stacks: ['React', 'Next', 'Strip', 'Sanity'],
    details: [
      'An ecommerce website, created with React and testnet payment checkout by stripe.',
      'Scalable and admin friendly to expand, add more items to the shop.',
      'Cart Item Management.',
      'Checkout payment.',
    ],
  },
] as ProjectData[]

export const certificates = [
  {
    title: 'Front-End Developer by Meta',
    img: certificate_meta,
    link: 'https://coursera.org/share/6261583e3f19c485b3a4edc5a731dc3f',
    date: '19 January 2024',
    span: 2,
    company: meta,
    details: [
      'Programming with JavaScript',
      'HTML and CSS in depth',
      'React Basics',
      'Advanced React',
      'Principles of UX/UI Design',
      'Coding Interview Preparation',
    ],
  },
  {
    title: 'IT Automation with Python by Google',
    img: certificate_google,
    link: 'https://coursera.org/share/56ace58308d7f6d4ebe0499c7020a2cc',
    date: '23 June 2022',
    span: 2,
    company: google,
    details: [
      'Crash Course on Python',
      'Introduction to Git and GitHub',
      'Python with the Operating System',
      'Troubleshooting and Debugging Techniques',
      'Configuration Management and the Cloud',
      'Automating Real-World Tasks with Python',
    ],
  },
  {
    title: 'React Web Development',
    img: certificate_react,
    link: 'https://coursera.org/share/d259a4611fca7ff1facb2ec31ee94096',
    date: '24 August 2022',
    company: ust,
    details: [
      'React Basics',
      'Advanced React',
      'Build your first react website',
    ],
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    img: certificate_hardware,
    link: 'https://coursera.org/share/851b2e682b7b8f01ee689fff4f5cbb1b',
    date: '27 June 2022',
    company: ibm,
    details: [
      'Demonstrate an understanding of operating system fundamentals.',
      'Explain basic workstation setup, locate operating system settings, and identify good troubleshooting practices.',
    ],
  },
  {
    title: 'Introduction to Cloud Computing',
    img: certificate_cloud,
    link: 'https://coursera.org/share/bee8666ae22615fe9d60839938bd6a0d',
    date: '30 June 2022',
    company: ibm,
    details: [
      'Define cloud computing and explain essential characteristics, history, the business case for cloud, and the emerging technologies enabled by cloud',
    ],
  },
] as CertificateData[]

export const skills = [
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
  { name: 'C#', icon: c },
  { name: '.NET MVC', icon: netmvc },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Git',
    icon: git,
  },
  { name: 'Azure Devops', icon: azuredevops },
] as SkillType[]
