import SectionWrapper from '../hoc/SectionWrapper'
import { certificates } from '../constants/data'
import { fadeIn } from '../constants/utils'
import { motion } from 'framer-motion'
import { CertificateData, NavState } from '../constants/type'
import { Pill, Title } from './subcomponents'

const CertificateCard = ({
  img,
  link,
  company,
  title,
  details,
  date,
}: CertificateData) => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <img
        src={img}
        className="w-full max-h-60 object-cover object-top rounded-md brightness-90"
      />

      <a
        href={link}
        target="_blank"
        className="group flex items-center gap-3 self-center pointer-events-auto"
      >
        <div className="rounded-full place-content-center metalic p-2 min-w-11 min-h-11 cursor-pointer drop-shadow-white-md transition group-hover:scale-110">
          <img src={company} className="w-8 max-h-8" />
        </div>
        <p className="text-slate-300 bg-slate-900 text-center text-base group-hover:underline underline-offset-4">
          {title}
        </p>
      </a>

      <ul className="text-[0.8rem] list-disc ml-5 self-start">
        {details.map((i, index) => {
          return (
            <li key={index} className="text-slate-400">
              {i}
            </li>
          )
        })}
      </ul>
      <Pill text={date} className="self-end w-fit" index={2} />
    </div>
  )
}

const Certificate = () => {
  return (
    <>
      <Title text="Certificates" />
      <div className="pt-0 rounded-[10px] relative">
        <div className="mt-5 flex flex-wrap gap-5">
          {certificates?.map((data, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.45 + 0.3, 0.75)}
              className={`container-slate ${
                data.span === 2 ? 'md:basis-[48.5%]' : 'md:basis-[31.5%]'
              } relative w-full md:flex-1 justify-between`}
            >
              <CertificateCard {...data} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Certificate, NavState.Certificate)
