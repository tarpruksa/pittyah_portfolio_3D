import React, { useState } from 'react'

import { StarsCanvas, ViolinCanvas } from './canvas'
import Navbar from './components/Navbar'
import { NavState } from './constants/type'

export default function App() {
  const [currentNav, setCurrentNav] = useState<NavState>(NavState.About)

  return (
    <div className="relative z-0">
      <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
      <ViolinCanvas currentNav={currentNav} />
      <StarsCanvas currentNav={currentNav} />
    </div>
  )
}
