import { ExperienceData, NavState } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Pill, Title } from './subcomponents'
import { experiences } from '../constants/data'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const ExperienceCard = (props: ExperienceData) => {
  const { title, company, icon, date, link, details, stacks } = props
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#0f172a',
        color: '#cbd5e1',
        boxShadow: '2px 4px 4px #000',
      }}
      contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
      date={date}
      dateClassName="tracking-wider"
      iconStyle={{
        overflow: 'hidden',
        boxShadow: '0 0px 20px #dadada',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full metalic">
          <img
            src={icon}
            alt={company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-slate-300 text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <p className="section-subheader" style={{ margin: 0 }}>
          {company}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className="absolute top-6 2xl:top-7 right-6"
        >
          <FaSquareArrowUpRight size={20} className="link-icon" />
        </a>
      )}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {details.map((detail, index) => {
          const isSubList = detail.startsWith('-')
          return (
            <li
              key={`experience-point-${index}`}
              className={`text-slate-400 text-[0.8rem] ${
                isSubList ? 'ml-5' : ''
              }`}
            >
              {isSubList ? detail.substring(1) : detail}
            </li>
          )
        })}
      </ul>
      {stacks && (
        <div className="flex gap-2 flex-wrap mt-5 mb-2">
          {stacks.map((stack, index) => (
            <Pill key={index} text={stack} index={index} />
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  )
}

const Work = () => {
  return (
    <>
      <Title text="Work Experiences" />
      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="#888888" className="!w-full !max-w-none">
          {experiences.map((data, index) => (
            <ExperienceCard key={`experience-${index}`} {...data} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Work, NavState.Experience)
