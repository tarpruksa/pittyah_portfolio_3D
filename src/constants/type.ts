import { IconType } from 'react-icons'

export enum NavState {
  Home = 'home',
  Passion = 'passion',
  Project = 'project',
  Experience = 'experience',
  Certificate = 'certificate',
  Contact = 'contact',
}

export enum PassionType {
  Design = 'design',
  Build = 'build',
  Connect = 'connect',
}

export type PassionData = {
  title: string
  detail: string
  type: PassionType
}

export type CertificateData = BaseData & {
  img: string
  span: number
}

export type LinkData = {
  title: string
  link: string
  icon: IconType
}

export type ExperienceData = BaseData & {
  icon: string
  stacks: string[]
}

export type ProjectData = BaseData & {
  imgs: string[]
  stacks: string[]
  github: string
}
type BaseData = {
  title: string
  date: string
  link?: string
  company: string
  details: string[]
}

export enum BounceState {
  Initial,
  Click,
  ClickEnd,
}

export type DirectionType = 'left' | 'right' | 'up' | 'down' | null
export type TransitionType = 'spring' | 'tween' | 'inertia' | null

export type SkillType = {
  name: string
  icon: string
}
