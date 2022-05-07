import Link from 'next/link'
import styles from './navbaritem.module.css'

const NavBarItem = ({ path, title }) => {
  return (
    <li className={styles.navItem}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

export default NavBarItem
