import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaLightbulb, FaUser } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import ThemeSwitcher from '../ThemeSwitcher'
import styles from './bottom-bar.module.css'

export const BottomBar = () => {
  const [isActive, setIsActive] = useState('home')

  useEffect(() => {
    const slug = window.location.pathname.split('/')[1]
    setIsActive(slug)
  }, [])

  const handleClickHome = () => {
    setIsActive('home')
  }
  const handleClickProjects = () => {
    setIsActive('projects')
  }

  const handleCLickAbout = () => {
    setIsActive('about')
  }
  return (
    <navbar className={styles.navbar}>
      <ul className={styles.navlist}>
        <Link href='/' passHref>
          <a
            onClick={handleClickHome}
            className={`${styles.item} ${
              isActive === 'home' ? `${styles.active}` : ''
            }`}
          >
            <FiHome size='1.5em' />
          </a>
        </Link>

        <Link href='/projects' passHref>
          <a
            onClick={handleClickProjects}
            className={`${styles.item} ${
              isActive === 'projects' ? `${styles.active}` : ''
            }`}
          >
            <FaLightbulb size='1.5em' id='projects' />
          </a>
        </Link>
        <Link href='/about' passHref>
          <a
            onClick={handleCLickAbout}
            className={`${styles.item} ${
              isActive === 'about' ? `${styles.active}` : ''
            }`}
          >
            <FaUser size='1.5em' id='about' />
          </a>
        </Link>

        <li className={styles.item}>
          <ThemeSwitcher />
        </li>

        {/* <li path='/blog' title='BLOG' /> */}
        <li>{/* <ThemeSwitcher /> */}</li>
      </ul>
    </navbar>
  )
}
