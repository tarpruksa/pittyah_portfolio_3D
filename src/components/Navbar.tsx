import React, { useEffect, useState } from 'react'
import { NavState, NavStateType, getNavString } from '../constants/type'
import { navData } from '../constants/data'
import { Link } from 'react-router-dom'

interface NavbarProps extends NavStateType {
  setCurrentNav(val: NavState): void
}

export default function Navbar({ currentNav, setCurrentNav }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div>
        <ul className="list-none flex flex-row gap-10">
          {navData.map((nav) => (
            <li
              key={nav.id}
              className={`${
                currentNav === nav.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setCurrentNav(nav.id)}
            >
              <a href={`#${getNavString(nav.id)}`}>{nav.title}</a>
              {/* <Link to={NavState[nav.id].toLowerCase()}>{nav.title}</Link> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
