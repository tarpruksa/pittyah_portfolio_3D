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
} from '../assets'
import { CertificateData, NavState, SkillType } from './type'

export const validEmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

// export const navData = [
//   { id: NavState.About, title: NavState[NavState.About] },
//   { id: NavState.Work, title: NavState[NavState.Work] },
//   { id: NavState.Skill, title: NavState[NavState.Skill] },
//   { id: NavState.Certificate, title: NavState[NavState.Certificate] },
//   { id: NavState.Contact, title: NavState[NavState.Contact] },
// ]

export const navCircle = [
  {
    title: 'WHAT I DO',
    navRoute: NavState.Passion,
    position: 'top-[10%] left-[20%]',
  },
  {
    title: 'EXPERIENCES',
    navRoute: NavState.Experience,
    position: 'top-[40%] left-[20%]',
  },
  {
    title: 'SKILLS & CERTIFICATES',
    navRoute: NavState.SkillCer,
    position: 'top-[10%] right-[20%]',
  },
  {
    title: 'CONTACT ME',
    navRoute: NavState.Contact,
    position: 'top-[40%] right-[20%]',
  },
]

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
