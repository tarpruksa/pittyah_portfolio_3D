import { motion } from 'framer-motion'
import { NavState } from '../constants/type'

const SectoinWrapper = (Component: any, idName: NavState | null) =>
  function HOC() {
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
        className={`${idName ? 'my-36' : ''}`}
      >
        {idName && (
          <span className="absolute -mt-28" id={idName}>
            &nbsp;
          </span>
        )}
        <Component />
      </motion.section>
    )
  }

export default SectoinWrapper
