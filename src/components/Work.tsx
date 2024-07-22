import React from 'react'
import { AnimationType, NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/utils'
import { styles } from '../style'
import { lex247logo, lex247 } from '../assets'

const Work = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-start">
      <div className="flex gap-10 border-blue p-8">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>2022 - present</p>
          <img src={lex247} className="mt-2 h-44" />
        </motion.div>

        <div className="border-grey p-8 rounded-[10px]">
          <div className="flex items-end gap-4 mb-4">
            <img
              src={lex247logo}
              style={{ filter: 'brightness(3)', height: '45px' }}
            />
            <p>A True-Cloud Legal Practice Management Software</p>
          </div>
          <p className={styles.sectionSubText}>Frontend Developer</p>
          <div>
            <p>
              Build, Improve, Develop features for lawyer firm. Although title
              as frontend but I also do a lot of part on backend.
            </p>

            <div className="flex gap-5 mt-2">
              <p>What I make changes:</p>
              <div>
                <p>
                  New control panel for the application, 20 pages, over 300
                  configable system included.
                </p>
                <p>3 new features: Will Management, Time Bank, Time Capture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Work, AnimationType.Left)
