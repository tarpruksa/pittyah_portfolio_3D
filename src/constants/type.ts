export enum NavState {
  About,
  Work,
  Skill,
  Certificate,
  Contact,
}

export type CertificateData = {
  title: string
  img: string
  link: string
  date: string
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
