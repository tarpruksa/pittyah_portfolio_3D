import React, { useState } from 'react'
import { NavState, NavStateType } from '../constants/type'
import { navData } from '../constants/data'
import { Link } from 'react-router-dom'

interface NavbarProps extends NavStateType {
  setCurrentNav(val: NavState): void
}

export default function Navbar({ currentNav, setCurrentNav }: NavbarProps) {
  return (
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
            <Link to={NavState[nav.id].toLowerCase()}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
