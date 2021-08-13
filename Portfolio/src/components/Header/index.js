import styles from '../../styles/Header.module.css'

const BLOG_URL = 'http://localhost:3000/'
export default function Header() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__content} onClick={toTop}>
        <span className={styles.header__text}>Albertcacv</span>
        <span className={styles.header__logo}></span>
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a href="#about">Sobre mi</a>
          </li>
          <li className={styles.header__item}>
            <a href="#projects">Proyectos</a>
          </li>
          <li className={styles.header__item}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.header__item}>
            <a href={BLOG_URL}>Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
