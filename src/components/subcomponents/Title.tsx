import { motion } from 'framer-motion'
import { textVariant } from '../../constants/utils'

export default function Title({ text }: { text: string }) {
  return (
    <motion.div variants={textVariant('down', 0.1, 0.4)}>
      <h2 className="section-headtext">{text}</h2>
    </motion.div>
  )
}
