import * as React from 'react'

import { useState } from 'react'

import 'boxicons'

import Nav from './Nav'

export default function Header() {
  const [isActive, setActive] = useState(false)

  const showMenu = () => {
    setActive(!isActive)
  }

  const handleClicksChildren = (param) => {
    setActive(param)
  }
  return (
    <header className='header'>
      <nav className='nav bd-grid'>
        <div className='nav__toggle' id='nav-toggle' onClick={showMenu}>
          <box-icon name='menu'></box-icon>
        </div>

        <div>
          <a href='#' className='nav__logo'>
            Albert
          </a>
        </div>

        {isActive && <Nav active={isActive} action={handleClicksChildren}/>}
      </nav>
    </header>
  )
}
