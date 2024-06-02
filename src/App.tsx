import React, { useState } from 'react'
import { StarsCanvas, ViolinCanvas } from './canvas'
import { NavState } from './constants/type'
import { Navbar, Certificate, Work, About, Skill, Contact } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [currentNav, setCurrentNav] = useState<NavState>(NavState.About)

  return (
    <BrowserRouter>
      <div>
        <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
        <ViolinCanvas currentNav={currentNav} />
        <StarsCanvas currentNav={currentNav} />
        <div className="relative z-0">
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="skill" element={<Skill />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
