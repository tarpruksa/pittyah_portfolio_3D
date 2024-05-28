import React from 'react'
import StarsCanvas from './canvas/StarsCanvas'
import ViolinCanvas from './canvas/ViolinCanvas'

export default function App() {
  return (
    <div className="relative z-0">
      <ViolinCanvas />
      <StarsCanvas />
    </div>
  )
}
