import React from 'react'
import { AnimationType, getNavString, NavState } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../style'
import LaptopCanvas from '../canvas/LaptopCanvas'
import { EaselCanvas } from '../canvas'
import { fadeIn } from '../constants/utils'
import { motion } from 'framer-motion'

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
  {
    title: 'Musician',
    element: <></>,
    detail:
      'Also a violinist, 10+ years of orchestra player. As i do it on part time, this also sharpen my brain and keep my focus fresh',
    flex: 'flex-2 h-[30vh]',
  },
]

const Passion = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-right`}>What I do</h2>
      <div className="flex-start gap-10 flex-wrap w-full">
        {passion.map((p, index) => {
          return (
            <motion.div
              variants={fadeIn('right', 'spring', index * 0.5 + 0.35, 0.75)}
              className={`flex-center justify-end flex-col flex-1 border-grey p-8 min-w-[400px] h-[50vh] relative ${p.flex}`}
            >
              <div className="absolute h-full w-full top-0">{p.element}</div>
              <p>{p.detail}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Passion, AnimationType.Left)
