import { motion } from 'framer-motion'
import { linkToProfiles } from '../constants/data'
import { fadeIn } from '../constants/utils'

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.3, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="pointer-events-auto grid place-items-center gap-6 -mt-8"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {linkToProfiles.map((l, index) => (
          <a href={l.link} key={index} target="_blank">
            <l.icon
              size={26}
              title={l.title}
              className="link-icon cursor-pointer"
            />
          </a>
        ))}
      </div>
      <a
        className="group section-subheader text-center text-sm sm:text-base tracking-widest hover:underline underline-offset-8 
                  transition hover:drop-shadow-white-md hover:text-slate-300"
        href="https://github.com/tarpruksa/pittyah_portfolio_3D"
        target="_blank"
      >
        Designed & Built by{' '}
        <span className="text-blue-600 group-hover:text-blue-500">
          Pittayah Pruksacholavit
        </span>
      </a>
      <p className="-mt-3 text-slate-500 tracking-wider">
        tar.pittayah@gmail.com
      </p>
    </motion.div>
  )
}

export default Footer
