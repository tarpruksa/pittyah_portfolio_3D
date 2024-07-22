import React from 'react'
import { AnimationType, getNavString, NavState } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../style'
import LaptopCanvas from '../canvas/LaptopCanvas'
import { EaselCanvas } from '../canvas'

const passion = [
  {
    title: 'Develop',
    element: <LaptopCanvas />,
    detail:
      "Beyond front-end development, I'm a JAMstack specialist. Cloud CMS platforms, lambda functions, site-generators - Whatever your requirements, I'm happy to help you plan, build and deliver a JAMstack project that's fast, secure and reliable. text text text text",
  },
  {
    title: 'Design',
    element: <EaselCanvas />,
    detail:
      "Beyond front-end development, I'm a JAMstack specialist. Cloud CMS platforms, lambda functions, site-generators - Whatever your requirements, I'm happy to help you plan, build and deliver a JAMstack project that's fast, secure and reliable. text text text text",
  },
  // { title: 'Musician', element: <></> },
]

const Passion = () => {
  return (
    <div className="min-h-[50vh] flex-col flex-center mb-48">
      <h2 className={styles.sectionHeadText}>What I do</h2>
      <div className="flex-start gap-10 flex-wrap w-full">
        {passion.map((p) => {
          return (
            <div className="flex-center justify-end flex-col flex-1 border-grey p-8 h-[500px] relative">
              <div className="absolute h-full w-full top-0">{p.element}</div>
              {/* <div className="border-blue bg-blue circle h-32 w-32"></div> */}
              {/* <p className={styles.sectionSubText}>{p.title}</p> */}
              <p>{p.detail}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Passion, AnimationType.Left)
