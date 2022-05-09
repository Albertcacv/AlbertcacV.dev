import { useTheme } from 'next-themes'
import styles from './theme-switcher.module.css'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === 'light' ? '🌚' : '🌞'}
    </button>
  )
}

export default ThemeSwitcher
