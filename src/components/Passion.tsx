import { NavState, PassionData, PassionType } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { ShapeCanvas } from './canvas'
import { fadeIn } from '../constants/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../hook/useWindowSize'
import { Mobile, passion, XLDesktop } from '../constants/data'
import { Highlight } from './subcomponents'

interface PassionCardProps extends PassionData {
  index: number
  setCurrentPassion(prop: PassionType): void
  active: boolean
}

const PassionCard = ({
  title,
  type,
  index,
  setCurrentPassion,
  active,
}: PassionCardProps) => {
  return (
    <>
      {index % 2 === 0 ? (
        <div className="border-none rounded-[20px] flex-1 min-h-[33vh] h-[33vh] flex flex-col bg-transparent relative">
          <span className={`shimmer ${active ? 'animate-wipe' : ''}`}></span>
          <span
            className={`hidden md:block pointer-events-none absolute inset-[-6px] transition duration-300
              border-[6px] lg:border-8 rounded-[20px] ${
                active ? 'border-slate-700' : 'border-slate-800'
              }`}
          ></span>
          <div className="h-[inherit] w-full grid place-items-center">
            <ButtonPassion
              active={active}
              title={title}
              onClick={() => setCurrentPassion(type)}
              isGrouped={false}
            />
          </div>
        </div>
      ) : (
        <div className="hidden md:block bg-primary h-[33vh] md:w-10 lg:14 pointer-events-auto"></div>
      )}
    </>
  )
}

const ButtonPassion = ({ active, title, onClick, isGrouped }: any) => {
  return (
    <button
      className={`button-passion ${
        active ? 'bg-blue-900 text-blue-200' : 'bg-slate-800'
      } relative ${
        isGrouped
          ? 'first:rounded-l-lg last:rounded-r-lg'
          : 'rounded-lg border-r-[1px]'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

const Passion = () => {
  const [detailText, setDetailText] = useState<string | undefined>()
  const [currentPassion, setCurrentPassion] = useState<PassionType>(
    PassionType.Design
  )
  const windowSize = useWindowSize()
  const isXLScreen = windowSize >= XLDesktop
  const isMobile = windowSize < Mobile

  useEffect(() => {
    setDetailText(
      passion.find((p) => {
        return p.type === currentPassion
      })?.detail
    )
  }, [currentPassion])

  return (
    <motion.div
      variants={fadeIn('up', 'spring', isXLScreen ? 2.5 : 0.6, 0.6)}
      className="min-h-[80vh] 2xl:pt-10"
    >
      <h2 className="section-headtext">What I do</h2>
      <div className="flex flex-col gap-3">
        <p className="text-slate-400 text-lg text-justify leading-7 lg:leading-8 tracking-wide">
          Hey there! I'm a <Highlight text="Frontend Developer" /> who loves
          turning ideas into awesome websites. I've been working my magic with
          React.js and connect to 3D world with Three.js. I'm always excited to
          learn new things. My goal is to create online experiences that are not
          only beautiful but also super easy to use.
        </p>
        <p className="text-slate-400 text-lg text-justify leading-7 lg:leading-8 tracking-wide">
          Let's chat about how we can bring your vision to life!
        </p>
      </div>
      <div className="relative mt-16">
        <div className="flex flex-row flex-nowrap w-full relative z-10 pointer-events-none rounded-md">
          {isMobile ? (
            <>
              <span className="shimmer animate-wipe"></span>
              <div className="w-full h-[33vh] bg-transparent flex justify-center items-center">
                {passion.map((p, index) => {
                  return (
                    index % 2 === 0 && (
                      <ButtonPassion
                        key={index}
                        active={currentPassion === p.type}
                        title={p.title}
                        onClick={() => setCurrentPassion(p.type)}
                        isGrouped={true}
                      />
                    )
                  )
                })}
              </div>
            </>
          ) : (
            <>
              {passion.map((p, index) => (
                <PassionCard
                  key={index}
                  index={index}
                  active={currentPassion === p.type}
                  setCurrentPassion={setCurrentPassion}
                  {...p}
                />
              ))}
            </>
          )}
        </div>
        <div className="absolute -inset-1 md:inset-0 overflow-hidden border-none rounded-md pointer-events-auto">
          <ShapeCanvas shape={currentPassion} />
        </div>
      </div>

      <p
        className={`text-center mt-10 text-lg italic text-slate-400 tracking-wide transition-opacity duration-300 ${
          detailText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {detailText?.split('-')?.map((x, index) => {
          return index === 0 ? <Highlight key={index} text={x} /> : `- ${x}`
        })}
      </p>
    </motion.div>
  )
}

export default SectionWrapper(Passion, NavState.Passion)
