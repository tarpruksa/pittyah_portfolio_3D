import { useState } from 'react'
import {
  Work,
  Home,
  Contact,
  Passion,
  Navbar,
  Project,
  Skill,
  Certificate,
  Footer,
} from './components'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const [openContent, setOpenContent] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-primary">
        <Home setOpenContent={setOpenContent} />
        {openContent && (
          <div
            className="px-6 md:px-14 lg:px-20 xl:px-32 2xl:w-[52%] 2xl:px-0 
                     relative 2xl:ml-auto 2xl:mr-20 
                     mt-[-60px] pb-16 md:py-16"
          >
            <Passion />
            <Work />
            <Skill />
            <Project />
            <Certificate />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  )
}
