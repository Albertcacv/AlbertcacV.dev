import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../../context/themeContext'
import { SContent } from '../../UI/SContent'
import { SLayout } from '../../UI/SLayout'
import { darkTheme, lightTheme } from '../../utils/themes'
import Header from '../Header'
import Profile from '../Profile'

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SLayout>
        <Header />
        <Profile />
        <SContent>{children}</SContent>
      </SLayout>
    </ThemeProvider>
  )
}

export default Layout
