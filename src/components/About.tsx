import React from 'react'
import { NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/utils'
import { styles } from '../style'
import { ViolinCanvas } from '../canvas'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Hi, I'm Pittayah</h2>
        <p>Full stack developer, user interfaces</p>
        <p>Part time Professional Violinist</p>
      </motion.div>

      {/* <ViolinCanvas /> */}
    </>
  )
}

export default SectionWrapper(About, getNavString(NavState.About))
