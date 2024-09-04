import SectionWrapper from '../hoc/SectionWrapper'
import { skills } from '../constants/data'
import { BallCanvas } from './canvas'
import { useEffect, useState } from 'react'

const Skill = () => {
  const [open3D, setOpen3D] = useState(false)

  useEffect(() => {
    setTimeout(() => setOpen3D(true), 3000)
  }, [])

  return (
    <div className="flex flex-wrap justify-center my-36 gap-8 md:gap-10 ">
      {open3D && (
        <>
          {skills.map((skill, index) => (
            <BallCanvas
              key={index}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default SectionWrapper(Skill, null)
