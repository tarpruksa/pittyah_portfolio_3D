import React, { useState } from 'react'
import { ComputerCanvas, StarsCanvas, ViolinCanvas } from './canvas'
import { NavState } from './constants/type'
import { Navbar, Certificate, Work, About, Skill, Contact } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [currentNav, setCurrentNav] = useState<NavState>(NavState.About)

  return (
    <BrowserRouter>
      <div>
        <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
        {/* <ViolinCanvas currentNav={currentNav} />
        <StarsCanvas currentNav={currentNav} /> */}
        {/* <ComputerCanvas currentNav={currentNav} /> */}
        {/* <div className="fixed w-full h-screen z-[-2] galaxy-bg"></div> */}
        <div className="relative z-0 bg-primary">
          <About />
          <Work />
          <Skill />
          <Certificate />
          <Contact />
          {/* <Routes>
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="skill" element={<Skill />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
          </Routes> */}
        </div>
      </div>
    </BrowserRouter>
  )
}
