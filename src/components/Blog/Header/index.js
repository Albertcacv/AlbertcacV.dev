import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect, useState } from 'react'

import BlogNavBar from './Navbar'
import UilMoon from '@iconscout/react-unicons/icons/uil-moon'
import UilSun from '@iconscout/react-unicons/icons/uil-sun'
import UilApps from '@iconscout/react-unicons/icons/uil-apps'

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
        <span className='nav__logo'>
          <Link to='/'>AlbertcacV</Link>
        </span>
        <div className='nav__buttons'>
          {showNav && <BlogNavBar />}
          {/* <!-- THEME CHANGE BUTTON -->  */}
          {isLight ? (
            <span onClick={handleDarkThemeClick}>
              <UilMoon className='change-theme' />
            </span>
          ) : (
            <span onClick={handleDarkThemeClick}>
              <UilSun className='change-theme' />
            </span>
          )}

          {/* <!-- TOGGLE BUTTON -->  */}

          <div className='nav__toggle' id='nav-toggle' onClick={handleDrawer}>
            <UilApps className='nav__icon' />
          </div>
        </div>
      </nav>
    </header>
  )
}
