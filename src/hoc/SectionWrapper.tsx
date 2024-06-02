import React from 'react'
import { motion } from 'framer-motion'

const SectoinWrapper = (Component: any, nav: string) =>
  function HOC() {
    return (
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="sm:px-10 px-6 sm:py-2 py-2 max-w-7xl mx-auto absolute top-0 z-1 pointer-events-none"
      >
        <Component />
      </motion.section>
    )
  }

export default SectoinWrapper
