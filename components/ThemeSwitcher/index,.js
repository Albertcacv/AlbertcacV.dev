import { useTheme } from 'next-themes'
import { SThemeSwitcher } from '../../UI/SThemeSwitcher'
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <SThemeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? '🌚' : '🌞'}
    </SThemeSwitcher>
  )
}

export default ThemeSwitcher
