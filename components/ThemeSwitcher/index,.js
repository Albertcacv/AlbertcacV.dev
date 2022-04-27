import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import { SThemeSwitcher } from '../../UI/SThemeSwitcher'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <SThemeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? '🌚' : '🌞'}
    </SThemeSwitcher>
  )
}

export default ThemeSwitcher
