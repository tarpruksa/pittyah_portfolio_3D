import React, { useState } from 'react'
import { BounceState } from '../constants/type'
import { motion } from 'framer-motion'
import { styles } from '../style'

const About = () => {
  const [hoverHighlight, setHoverHighlight] = useState<boolean>(false)
  const [clickBounce, setClickBounce] = useState<BounceState>(
    BounceState.Initial
  )

  const handleClickBounce = () => {
    setClickBounce(BounceState.Click)
    setTimeout(() => {
      setClickBounce(BounceState.ClickEnd)
    }, 900)
  }
  return (
    <div className="relative min-h-[100vh] flex justify-center items-center gap-10">
      <div
        onMouseEnter={() => {
          setHoverHighlight(true)
        }}
        onMouseLeave={() => {
          setHoverHighlight(false)
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1.2 }}
        >
          <h2 className={styles.sectionHeadText}>Hi, my name is Pittayah</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.6, duration: 1 }}
        >
          <p>I'm a creative software developer from Thailand.</p>
          <p>Part time musician</p>
        </motion.div>
      </div>

      <div
        className={`relative z-0 aspect-square w-[350px] ${
          clickBounce === BounceState.Initial ? 'avatar-wrapper' : ''
        } `}
        onClick={handleClickBounce}
        clickBounce={clickBounce}
      >
        <div
          className={`cursor-pointer circle-ring${
            hoverHighlight ? ' pre-hover' : ''
          }`}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  )
}

export default About
