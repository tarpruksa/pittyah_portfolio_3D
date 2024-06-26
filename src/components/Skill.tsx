import React from 'react'
import { NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../constants/utils'
import { styles } from '../style'

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* {skills.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))} */}
      </div>
    </>
  )
}

export default SectionWrapper(Work, getNavString(NavState.Skill))
