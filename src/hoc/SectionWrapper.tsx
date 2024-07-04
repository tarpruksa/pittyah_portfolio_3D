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
              staggerChildren: 1,
              delayChildren: 0,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-12 py-10 max-w-7xl mx-auto relative z-0 pointer-events-none"
      >
        <span
          style={{
            marginTop: '-100px',
            paddingBottom: '100px',
            display: 'block',
          }}
          id={nav}
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default SectoinWrapper
