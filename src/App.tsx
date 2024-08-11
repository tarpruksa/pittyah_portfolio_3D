import React, { useState } from 'react'
import { NavState } from './constants/type'
import { Work, Home, CertificateAndSkill, Contact, Passion } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [currentNav, setCurrentNav] = useState<NavState>(NavState.Home)

  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <Home setCurrentNav={setCurrentNav} />
        {currentNav === NavState.Passion && <Passion />}
        {currentNav === NavState.Experience && <Work />}
        {currentNav === NavState.Contact && <Contact />}
        {currentNav === NavState.SkillCer && <CertificateAndSkill />}
        {/* {currentNav === NavState.Contact && <Contact />} */}
      </div>
    </BrowserRouter>
  )
}
