import { linkToProfiles, Mobile } from '../constants/data'
import { useWindowSize } from '../hook/useWindowSize'
import { motion } from 'framer-motion'
import { zoomIn } from '../constants/utils'

const ProflieLink = () => {
  const windowSize = useWindowSize()
  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-4 lg:gap-6">
      {linkToProfiles.map((l, index) => (
        <motion.a
          href={l.link}
          key={index}
          target="_blank"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={zoomIn(index * 0.2 + 0.2, 0.2)}
        >
          <l.icon
            size={windowSize < Mobile ? 24 : 26}
            title={l.title}
            className="link-icon cursor-pointer"
          />
        </motion.a>
      ))}
    </div>
  )
}

export default ProflieLink
