import React, { useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { certificates, skills } from '../constants/data'
import { BallCanvas } from '../canvas'
import { styles } from '../style'
import { fadeIn, textVariant } from '../constants/utils'
import { motion } from 'framer-motion'
import { AnimationType } from '../constants/type'

enum SectionType {
  Skill = 'skill',
  Certificate = 'certificate',
}

const Skill = () => {
  return (
    <div className="flex flex-wrap justify-start gap-10">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <BallCanvas name={skill.name} icon={skill.icon} index={index} />
        </div>
      ))}
    </div>
  )
}

const Certificate = () => {
  return (
    <div className="mt-5 flex flex-wrap gap-5">
      {certificates.map((data, index) => (
        <div className="rounded-[20px] flex-1 p-4 bg-grey pointer-events-auto">
          {/* <motion.div
            variants={fadeIn('right', 'spring', index * 0.5 + 0.35, 0.75)}
            className="rounded-[20px] flex-1 p-4 bg-grey pointer-events-auto"
          > */}
          <a href={data.link} target="_blank">
            <div className="bg-transparent flex justify-evenly items-center flex-col">
              <img src={data.img} className="w-full object-contain" />
              <p className="text-secondary text-center mt-6">{data.title}</p>
            </div>
          </a>
          {/* </motion.div> */}
        </div>
      ))}
    </div>
  )
}

const SkillAndCertificate = () => {
  const [select, setSelect] = useState<SectionType>(SectionType.Skill)

  const header = [
    { title: 'Technical Skills', select: SectionType.Skill },
    { title: 'Certificates', select: SectionType.Certificate },
  ]
  return (
    <div className="border-grey p-8 pt-0 rounded-[10px] relative">
      <motion.div
        variants={textVariant('down', 0.6, 0.6)}
        className="flex justify-around gap-8 mt-[-60px] w-full pointer-events-auto z-0"
      >
        {header.map((val, index) => {
          return (
            <button
              className={`${styles.sectionHeadText} w-1/2 p-6 ${
                select === val.select ? 'active' : ''
              }`}
              onClick={() => setSelect(val.select)}
            >
              {val.title}
            </button>
          )
        })}
      </motion.div>
      <motion.div variants={fadeIn('right', 'spring', 1, 0.75)}>
        {select === SectionType.Skill ? <Skill /> : <Certificate />}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(SkillAndCertificate, AnimationType.Right)
