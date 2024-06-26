import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import {
  CertificateData,
  IndexType,
  NavState,
  getNavString,
} from '../constants/type'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../constants/utils'
import { styles } from '../style'
import { certificates } from '../constants/data'

const CertificateCard = ({
  index,
  title,
  img,
  link,
  date,
}: CertificateData & IndexType) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5 + 0.35, 0.75)}
      className="rounded-[20px] w-[280px] bg-transparent shadow-card pointer-events-auto"
    >
      <a href={link} target="_blank">
        <div className="rounded-[20px] bg-transparent py-1 px-5 min-h-[300px] flex justify-evenly items-center flex-col">
          <img
            src={img}
            alt="web-development"
            className="w-[250px] h-[200px] object-contain"
          />

          <h3 className="text-white text-[12px] font-bold text-center">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  )
}
const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-5 flex flex-wrap gap-10">
        {certificates.map((data, index) => (
          <CertificateCard key={index} index={index} {...data} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certificate, getNavString(NavState.Certificate))
