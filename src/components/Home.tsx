import React, { useState } from 'react'
import { AnimationType, BounceState, NavState } from '../constants/type'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { TarCanvas } from '../canvas'
import { textVariant } from '../constants/utils'
import { navCircle } from '../constants/data'

const MainText = ({ setHoverHighlight }) => {
  return (
    <div
      onMouseEnter={() => {
        setHoverHighlight(true)
      }}
      onMouseLeave={() => {
        setHoverHighlight(false)
      }}
      className="absolute top-[700px] cursor-default"
    >
      <motion.div
        variants={textVariant('down', 0.6, 0.6)}
        animate="show"
        initial="hidden"
        className="text-center"
      >
        <h2 className={styles.headText}>
          Hi, I'm <span className="text-main-blue">Pittayah</span>
        </h2>
      </motion.div>

      <motion.div
        variants={textVariant('right', 1.2, 0.8)}
        animate="show"
        initial="hidden"
        className="text-center"
      >
        <h1>I'm a creative software developer from Thailand.</h1>
        <h1 className={styles.sectionSubText}>create / develop</h1>
      </motion.div>

      <div></div>
    </div>
  )
}
const About = ({ setCurrentNav }) => {
  const [animation, setAnimation] = useState<AnimationType>(
    AnimationType.Center
  )
  const [hoverHighlight, setHoverHighlight] = useState<boolean>(false)
  const [clickBounce, setClickBounce] = useState<BounceState>(
    BounceState.Initial
  )

  const handleSelect = (nav: NavState) => {
    handleClickBounce()
    if (nav === NavState.SkillCer || nav === NavState.Contact) {
      setAnimation(AnimationType.Left)
    } else if (nav === NavState.Home) {
      setAnimation(AnimationType.Center)
    } else {
      setAnimation(AnimationType.Right)
    }
    setCurrentNav(nav)
    setHoverHighlight(false)
  }

  const handleReset = () => {
    handleClickBounce()
    setAnimation(AnimationType.Center)
    setCurrentNav(NavState.Home)
  }

  const handleClickBounce = () => {
    setClickBounce(BounceState.Click)
    setTimeout(() => {
      setClickBounce(BounceState.ClickEnd)
    }, 900)
  }

  return (
    <>
      <motion.div
        variants={{ center: { x: 0 }, left: { x: -500 }, right: { x: 500 } }}
        transition={{ type: 'tween' }}
        animate={animation}
      >
        <div className="relative min-h-[100vh] flex flex-col justify-center items-center gap-20">
          <div
            className="tar-canvas"
            // onClick={handleReset}
          >
            <TarCanvas />
          </div>

          <div
            className={`absolute top-[100px] flex items-center justify-center z-0 aspect-square w-[550px] pointer-events-none${
              clickBounce === BounceState.Initial ? ' avatar-wrapper' : ''
            } `}
            clickBounce={clickBounce}
          >
            <div className={`circle-ring${hoverHighlight ? ' purple' : ''}`}>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <MainText setHoverHighlight={setHoverHighlight} />

          {animation === AnimationType.Center ? (
            <>
              {navCircle.map((c) => {
                return (
                  <div
                    className={`absolute ${c.position}`}
                    onMouseEnter={() => {
                      setHoverHighlight(true)
                    }}
                    onMouseLeave={() => {
                      setHoverHighlight(false)
                    }}
                  >
                    <div
                      className="circle-button"
                      onClick={() => handleSelect(c.navRoute)}
                    >
                      <p className={styles.sectionSubText}>{c.title}</p>
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <div
              className={`absolute top-[50%] ${
                animation === AnimationType.Left ? 'left-[35%]' : 'right-[35%]'
              }`}
            >
              <div
                className="circle-button return"
                onClick={() => handleSelect(NavState.Home)}
              >
                <p className={styles.sectionSubText}>HOME</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default About
