import { useEffect, useState } from 'react'
import { BounceState } from '../constants/type'
import { motion } from 'framer-motion'
import { TarCanvas } from './canvas'
import { textVariant, zoomIn } from '../constants/utils'
import { Highlight } from './subcomponents'

const MainText = ({
  setHoverHighlight,
}: {
  setHoverHighlight(prop: React.SetStateAction<boolean>): void
}) => {
  return (
    <div
      onMouseEnter={() => {
        setHoverHighlight(true)
      }}
      onMouseLeave={() => {
        setHoverHighlight(false)
      }}
      onClick={() => setHoverHighlight((prev) => !prev)}
      className="cursor-default pointer-events-auto z-50"
    >
      <motion.div
        variants={textVariant('down', 2.2, 0.6)}
        animate="show"
        initial="hidden"
        className="text-center"
      >
        <h2 className="text-slate-300 font-semibold text-4xl md:text-5xl">
          Hi, I'm{' '}
          <Highlight text="Pittayah!" extendClass="text-4xl md:text-5xl" />
        </h2>
      </motion.div>

      <motion.div
        variants={textVariant('right', 2.8, 0.6)}
        animate="show"
        initial="hidden"
        className="text-center text-xl md:text-2xl mt-3 text-slate-400 tracking-wide"
      >
        <h1>I code to build interactive digital worlds.</h1>
      </motion.div>
    </div>
  )
}

const Home = () => {
  const [hoverHighlight, setHoverHighlight] = useState<boolean>(false)
  const [clickBounce, setClickBounce] = useState<BounceState>(
    BounceState.ClickEnd
  )
  const [openFace, setOpenFace] = useState<boolean>(false)

  const handleClickBounce = () => {
    setClickBounce(BounceState.Click)
    setTimeout(() => {
      setClickBounce(BounceState.ClickEnd)
    }, 900)
  }

  useEffect(() => {
    setTimeout(() => setOpenFace(true), 1500)
    setTimeout(() => handleClickBounce(), 1700)
  }, [])

  return (
    <div
      className={`relative w-auto  bg-primary mx-4
        flex flex-col justify-center items-center gap-12 md:gap-20
        min-h-[100vh] overflow-hidden md:overflow-none translate-x-0
        2xl:fixed  2xl:-translate-x-[30%] 2xl:inset-0
        `}
    >
      {openFace && (
        <div className="absolute top-10 w-full h-[calc(100vh+250px)] mt-[-250px]">
          <TarCanvas changeColor={hoverHighlight} />
        </div>
      )}

      <motion.div
        variants={zoomIn(1.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`relative mt-0 md:mt-10 2xl:mt-20 flex items-center justify-center aspect-square 
          min-w-[350px] w-[85%] max-w-[500px] pointer-events-none circle-ring ${
            hoverHighlight ? 'purple' : ''
          }`}
        data-clickbounce={clickBounce}
      >
        <i></i>
        <i></i>
        <i></i>
      </motion.div>

      <MainText setHoverHighlight={setHoverHighlight} />
    </div>
  )
}

export default Home
