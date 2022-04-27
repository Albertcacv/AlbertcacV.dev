import Link from 'next/link'
import { SHeader } from '../../UI/SHeader'
import { SNavbar } from '../../UI/SNavbar'
import ThemeSwitcher from '../ThemeSwitcher/index,'
import styles from './header.module.css'

const Header = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <SHeader>
      <h1>AlbertcacV</h1>

      <SNavbar>
        <ul className={styles.navlist}>
          <li>
            <Link href='/'>
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href='/skills'>
              <a>SKILLS</a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <a>PORTFOLIO</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>BLOG</a>
            </Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </SNavbar>
    </SHeader>
  )
}

export default Header
