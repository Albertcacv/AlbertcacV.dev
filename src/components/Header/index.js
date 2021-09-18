import * as React from 'react'

import { useEffect, useState } from 'react'

import UilMoon from '@iconscout/react-unicons/icons/uil-moon'
import UilSun from '@iconscout/react-unicons/icons/uil-sun'
import UilApps from '@iconscout/react-unicons/icons/uil-apps'
import Nav from './Nav'

export default function Header() {
  const [isLight, setTheme] = useState(true)
  const [showNav, setNav] = useState(false)

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  let windowWidth = 0
  const handleDarkThemeClick = () => {
    setTheme(() => !isLight)
  }

  const handleDrawer = () => {
    setNav(() => !showNav)
  }

  useEffect(() => {
    if (!isLight) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isLight])

  useEffect(() => {
    windowWidth = window.innerWidth
    if (windowWidth >= 768) {
      setNav(() => true)
    }
  }, [])

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <span className='nav__logo' onClick={ScrollToTop}>
          AlbertcacV
        </span>
        {showNav && <Nav />}
        <div className='nav__buttons'>
          {/* <!-- THEME CHANGE BUTTON --> */}
          {isLight ? (
            <span onClick={handleDarkThemeClick}>
              <UilMoon className='change-theme' />
            </span>
          ) : (
            <span onClick={handleDarkThemeClick}>
              <UilSun className='change-theme' />
            </span>
          )}

          {/* <!-- TOGGLE BUTTON --> */}
          <div className='nav__toggle' id='nav-toggle' onClick={handleDrawer}>
            <UilApps className='nav__icon' />
          </div>
        </div>
      </nav>
    </header>
  )
}
