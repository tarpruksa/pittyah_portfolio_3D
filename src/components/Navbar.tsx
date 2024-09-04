import { useCallback, useEffect, useState } from 'react'
import { NavState } from '../constants/type'
import { Mobile, navData } from '../constants/data'
import { useScrollBlock } from '../hook/useScrollBlock'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/utils'
import SectionWrapper from '../hoc/SectionWrapper'
import ProflieLink from './ProfileLink'
import { useWindowSize } from '../hook/useWindowSize'

const NavMenu = ({ setToggleMenu }: { setToggleMenu(prop: boolean): void }) => {
  const [active, setActive] = useState<NavState | null>()

  useEffect(() => {
    active && setTimeout(() => setActive(null), 3500)
  }, [active])
  return (
    <>
      {navData.map((nav, index) => (
        <motion.li
          key={nav.id}
          variants={fadeIn('down', 'spring', index * 0.075 + 0.8, 0.1)}
          className={`transition section-subheader hover:text-slate-200 md:text-sm cursor-pointer ${
            active === nav.id ? 'text-slate-200' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation()
            setActive(nav.id)
            setToggleMenu(false)
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </motion.li>
      ))}
      <motion.li variants={fadeIn('down', 'spring', 1.4, 0.2)}>
        <button
          className="py-2 px-3 lg:px-5 rounded-lg section-subheader md:text-sm cursor-pointer
                     hover:text-slate-200 button-shadow hover:bg-slate-900"
        >
          Resume
        </button>
      </motion.li>
    </>
  )
}

const Navbar = () => {
  const [isScrollUp, setIsScrollUp] = useState<boolean>(true)
  const [isOnFirstView, setIsOnFirstView] = useState<boolean>(true)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [y, setY] = useState<number>(window.scrollY)
  const [blockScroll, allowScroll] = useScrollBlock()
  const windowSize = useWindowSize()
  const isMobile = windowSize < Mobile

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setIsScrollUp(true)
      } else if (y < window.scrollY) {
        setIsScrollUp(false)
      }
      if (window.scrollY > 100) {
        setIsOnFirstView(false)
      } else {
        setIsOnFirstView(true)
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    toggleMenu ? blockScroll() : allowScroll()
  }, [toggleMenu])

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => window.removeEventListener('scroll', handleNavigation)
  }, [handleNavigation])

  return (
    <nav
      className={`fixed px-6 md:px-8 lg:px-20 inset-0 flex justify-between 
        items-center transition h-20 z-20 ${
          isScrollUp ? 'translate-y-0' : '-translate-y-20'
        } ${
        isOnFirstView
          ? 'bg-gradient-to-t from-primary to-slate-800'
          : toggleMenu
          ? 'bg-primary'
          : 'bg-gradient-to-t from-slate-900/80 to-slate-800/80 shadow-black-md backdrop-blur-md'
      }`}
    >
      {!toggleMenu && (
        <span
          className="shimmer !-inset-8 opacity-55"
          style={{
            animation: !isOnFirstView ? 'wipe 3s linear infinite' : '',
          }}
        />
      )}
      <div className="flex gap-6 sm:gap-10 md:gap-6 lg:gap-10">
        <div
          className="relative cursor-pointer"
          title="Home"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div
            className="circle-ring relative w-[40px] sm:w-[50px] aspect-square flex items-center justify-center"
            data-clickbounce="1"
          >
            <i className="!border-2"></i>
            <i className="!border-2"></i>
            <i className="!border-2"></i>
          </div>
          <h1 className="absolute inset-0 grid place-items-center text-2xl text-blue-200">
            P
          </h1>
        </div>

        <ProflieLink />
      </div>

      {!isMobile ? (
        <ul className="list-none flex gap-5 lg:gap-7 xl:gap-12 items-center text-slate-400">
          <NavMenu setToggleMenu={setToggleMenu} />
        </ul>
      ) : (
        <div
          className={`hamburger z-50 ${toggleMenu ? 'is-active' : ''}`}
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      )}
      <div
        className={`fixed md:hidden inset-0 z-20  h-screen backdrop-blur-md transition-all duration-300 ${
          toggleMenu ? 'translate-x-2' : 'translate-x-full'
        }`}
        onClick={() => setToggleMenu(false)}
      >
        <div
          className={`absolute z-30 top-0 -right-2 w-3/4 h-screen bg-slate-800 
          grid place-items-center shadow-xl shadow-white/50
        `}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="list-none flex flex-col items-center gap-16 text-slate-400">
            <NavMenu setToggleMenu={setToggleMenu} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SectionWrapper(Navbar, null)
