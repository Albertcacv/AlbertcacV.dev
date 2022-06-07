import { useState } from 'react'
import { NAVIGATION } from '../../data/navigation'
import { NavigationItem } from '../NavigationItem'
import ThemeSwitcher from '../ThemeSwitcher'
import styles from './bottom-bar.module.css'

export const BottomBar = () => {
  //TODO: create a context to highlight the items in the bottom bar
  const [isActive, setIsActive] = useState('home')

  const ACTIONS = {
    handleClickHome: () => setIsActive('home'),
    handleClickProjects: () => setIsActive('projects'),
    handleCLickAbout: () => setIsActive('about'),
    handleCLickBlog: () => setIsActive('blog'),
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        {NAVIGATION.map(({ id, href, action, title, icon }) => (
          <NavigationItem
            key={id}
            href={href}
            action={ACTIONS[action]}
            className={`${styles.item} ${
              isActive === title ? styles.active : ''
            }`}
            title={title}
          />
        ))}
        <li className={styles.item}>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  )
}
