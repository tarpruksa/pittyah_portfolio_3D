enum NavState {
  About,
  Work,
  Skill,
  Certificate,
  Contact,
}

type NavStateType = {
  currentNav: NavState
}

export { NavState, NavStateType }
