import React, { useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { certificates, skills } from '../constants/data'
import { BallCanvas } from '../canvas'
import { styles } from '../style'
import { fadeIn, textVariant } from '../constants/utils'
import { motion } from 'framer-motion'
import { AnimationType, CertificateData } from '../constants/type'

enum SectionType {
  Skill = 'skill',
  Certificate = 'certificate',
}

const Skill = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <BallCanvas name={skill.name} icon={skill.icon} index={index} />
        </div>
      ))}
    </div>
  )
}

const CertificateCard = ({
  img,
  link,
  company,
  title,
  details,
  date,
}: CertificateData) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <img src={img} className="w-full object-contain" />
        <div className="flex-center gap-3 self-center">
          <a href={link} target="_blank" className="pointer-events-auto">
            <div className="rounded-full place-content-center bg-slate-300 p-2 w-11 h-11 cursor-pointer drop-shadow-white-md transition hover:scale-110 hover:bg-slate-100">
              <img src={company} className="w-8 max-h-8" />
            </div>
          </a>
          <p className="text-slate-300 text-center text-[1rem]">{title}</p>
        </div>

        <ul className="text-[0.8rem] self-start">
          {details.map((i, index) => {
            return (
              <li key={index} className="text-slate-400">
                - {i}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="self-end text-xs text-slate-400 p-1.5 px-2.5 bg-slate-950 rounded-lg">
        {date}
      </div>
    </>
  )
}

const Certificate = ({ renderFirstTime }) => {
  const getDivClass = (span) => {
    return `rounded-[20px] ${
      span === 2 ? 'basis-[48.5%]' : 'basis-[31.5%]'
    } p-4 bg-slate-900 relative flex justify-between flex-col gap-3`
  }

  return (
    <div className="mt-5 flex flex-wrap gap-5">
      {certificates?.map((data, index) => (
        <>
          {renderFirstTime ? (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.5 + 0.35, 0.75)}
              className={getDivClass(data.span)}
            >
              <CertificateCard {...data} />
            </motion.div>
          ) : (
            <div key={index} className={getDivClass(data.span)}>
              <CertificateCard {...data} />
            </div>
          )}
        </>
      ))}
    </div>
  )
}

const SkillAndCertificate = () => {
  const [select, setSelect] = useState<SectionType>(SectionType.Certificate)
  const [renderFirstTime, setRenderFirstTime] = useState<boolean>(true)

  const header = [
    { title: 'Certificates', select: SectionType.Certificate },
    { title: 'Technical Skills', select: SectionType.Skill },
  ]

  const handleSelect = (val: SectionType) => {
    setSelect(val)
    setRenderFirstTime(false)
  }

  return (
    <div className="border-grey p-8 pt-0 rounded-[10px] relative">
      <motion.div
        variants={textVariant('down', 0.2, 0.6)}
        className="flex justify-around gap-8 mt-[-60px] w-full pointer-events-auto z-0"
      >
        {header.map((val, index) => {
          return (
            <button
              className={`${styles.sectionHeadText} w-1/2 p-6 ${
                select === val.select ? 'active' : ''
              }`}
              onClick={() => handleSelect(val.select)}
            >
              {val.title}
            </button>
          )
        })}
      </motion.div>

      {select === SectionType.Skill ? (
        <Skill />
      ) : (
        <Certificate renderFirstTime={renderFirstTime} />
      )}
    </div>
  )
}

export default SectionWrapper(SkillAndCertificate, AnimationType.Right)
