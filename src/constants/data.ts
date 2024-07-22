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
} from '../assets'
import { CertificateData, NavState, SkillType } from './type'

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
    title: 'Meta Front-End Developer by Meta',
    img: certificate_meta,
    link: 'https://coursera.org/share/6261583e3f19c485b3a4edc5a731dc3f',
    date: '19th January 2024',
  },
  {
    title: 'Front-End Web Developer with React',
    img: certificate_react,
    link: 'https://coursera.org/share/d259a4611fca7ff1facb2ec31ee94096',
    date: '24th August 2022',
  },
  {
    title: 'Google IT Automation with Python by Google',
    img: certificate_google,
    link: 'https://coursera.org/share/56ace58308d7f6d4ebe0499c7020a2cc',
    date: '23th June 2022',
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
