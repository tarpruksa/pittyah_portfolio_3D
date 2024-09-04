import { FaGithub } from 'react-icons/fa6'
import { projects } from '../constants/data'
import { NavState, ProjectData } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { Pill, Title } from './subcomponents'
import { MdLiveTv } from 'react-icons/md'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/utils'

const ProjectCard = (props: ProjectData) => {
  const { details, stacks, title, imgs, github, link } = props
  return (
    <>
      <p className="text-slate-400 text-2xl font-bold">{title}</p>
      <div className="absolute top-4 right-4 flex gap-4">
        {link && (
          <a href={link} target="_blank" title="Live website">
            <MdLiveTv size={28} className="link-icon" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" title="Github code">
            <FaGithub size={28} className="link-icon" />
          </a>
        )}
      </div>
      <div className="w-full h-60 bg-slate-800 overflow-hidden group rounded-md">
        <div className="flex items-start transition duration-300 hover:-translate-x-full">
          {imgs.map((img, index) => (
            <img
              key={index}
              className={`${index === 0 ? 'object-cover' : 'object-fill'}`}
              src={img}
              alt={title}
            />
          ))}
        </div>
      </div>
      <ul className="text-[0.8rem] list-disc ml-5 self-start space-y-0.5">
        {details.map((d, index) => {
          return (
            <li key={index} className="text-slate-400">
              {d}
            </li>
          )
        })}
      </ul>
      <div className="flex flex-wrap gap-2 mt-1">
        {stacks.map((s, index) => {
          return <Pill key={index} text={s} index={index} />
        })}
      </div>
    </>
  )
}

const Project = () => {
  return (
    <>
      <div>
        <Title text="Projects" />
        <div className="flex flex-wrap gap-10">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 'spring', index * 0.5 + 0.35, 0.75)}
              className="container-slate w-full md:flex-1 relative px-6 gap-4"
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Project, NavState.Project)
