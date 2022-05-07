import NavBarItem from '../NavBarItem'
import ThemeSwitcher from '../ThemeSwitcher/index,'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AlbertcacV</h1>

      <navbar className={styles.navbar}>
        <ul className={styles.navlist}>
          <NavBarItem path='/' title='ABOUT' />
          <NavBarItem path='/skills' title='SKILLS' />
          <NavBarItem path='/portfolio' title='PORTFOLIO' />
          <NavBarItem path='/blog' title='BLOG' />
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </navbar>
    </header>
  )
}

export default Header
