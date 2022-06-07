import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <span>
        AlbertcacV<span className={styles.titleDot}>.</span>
      </span>
    </header>
  )
}

export default Header
