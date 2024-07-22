import React from 'react'
import { AnimationType, NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/utils'
import { styles } from '../style'

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant('down')}>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, AnimationType.Right)
