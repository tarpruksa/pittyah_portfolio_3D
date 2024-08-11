export enum NavState {
  Home = 'home',
  Passion = 'passion',
  Experience = 'experience',
  SkillCer = 'skillcer',
  Contact = 'contact',
  Resume = 'resume',
}

export enum AnimationType {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export type CertificateData = {
  title: string
  img: string
  link: string
  date: string
  span: number
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

export const getNavString = (input: NavState) => {
  return NavState[input].toLowerCase()
}

export type NavStateType = {
  currentNav: NavState
}

export type IndexType = {
  index: number
}

export type SkillType = {
  name: string
  icon: string
}
