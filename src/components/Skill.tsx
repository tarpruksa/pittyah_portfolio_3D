import { skills } from '../constants/data'
import { Suspense, lazy } from 'react'

const BallAsync = lazy(() => import('./canvas/BallCanvas.jsx' as any))

const Skill = () => {
  return (
    <div className="flex flex-wrap justify-center my-36 gap-8 md:gap-10">
      <Suspense fallback={<div>Loading...</div>}>
        {skills.map((skill, index) => (
          <BallAsync
            key={index}
            name={skill.name}
            icon={skill.icon}
            index={index}
          />
        ))}
      </Suspense>
    </div>
  )
}

export default Skill
