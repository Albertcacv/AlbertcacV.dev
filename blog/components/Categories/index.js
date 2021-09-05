import styles from "../../styles/nav.module.css"

export default function Categories() {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__title}>Categories </span>
      <ul className={styles.nav__list}>
        <button className={styles.nav__button}>
          <li className={styles.item}>Web Development</li>
        </button>

        <button className={styles.nav__button}>
          <li className={styles.item}>Cybersecurity</li>
        </button>
      </ul>
    </nav>
  )
}
