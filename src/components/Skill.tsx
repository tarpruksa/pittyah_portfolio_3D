import React from 'react'
import { NavState, getNavString } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { skills } from '../constants/data'
import { BallCanvas } from '../canvas'

const Skill = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <BallCanvas name={skill.name} icon={skill.icon} index={index} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Skill, getNavString(NavState.Skill))
