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
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-primary">
        <Home />
        <div
          className="w-auto mx-6 md:mx-14 lg:mx-20 xl:mx-32 
                    2xl:w-[52%] 2xl:px-0 
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
      </div>
    </BrowserRouter>
  )
}
