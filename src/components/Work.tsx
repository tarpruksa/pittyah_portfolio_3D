import React from 'react'
import { NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/utils'
import { styles } from '../style'

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Work</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Work, getNavString(NavState.Work))
