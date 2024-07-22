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
      className="rounded-[20px] flex-1 p-4 bg-grey pointer-events-auto"
    >
      <a href={link} target="_blank">
        <div className="bg-transparent flex justify-evenly items-center flex-col">
          <img src={img} className="w-full object-contain" />
          <p className="text-secondary text-center mt-6">{title}</p>
        </div>
      </a>
    </motion.div>
  )
}

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {certificates.map((data, index) => (
          <CertificateCard key={index} index={index} {...data} />
        ))}
      </div>
    </>
  )
}

export default Certificate
