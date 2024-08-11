import React from 'react'
import { motion } from 'framer-motion'
import { AnimationType } from '../constants/type'

const SectoinWrapper = (Component: any, position: AnimationType) =>
  function HOC() {
    let className = `w-[50%] absolute top-[100px] ${
      position === AnimationType.Left ? 'left-[5%]' : 'right-[5%]'
    } pointer-events-auto`
    return (
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.5,
              delayChildren: 0,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={className}
      >
        <Component />
      </motion.section>
    )
  }

export default SectoinWrapper
