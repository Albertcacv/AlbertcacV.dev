import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { BsEmojiSunglasses } from 'react-icons/bs'
import { GiEvilMoon } from 'react-icons/gi'
import styles from './theme-switcher.module.css'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    window.localStorage.setItem('theme', theme)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  
  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === 'light' ? <GiEvilMoon /> : <BsEmojiSunglasses />}
    </button>
  )
}

export default ThemeSwitcher
