import styles from "../../styles/tags.module.css"

export default function Tags() {
  return (
    <aside className={styles.tags}>
      <span className={styles.tags__title}> TAGS </span>
      <section className={styles.tags__content}>
        <button className={styles.tags__item}>
          <span>#HTML</span>
        </button>
        <button className={styles.tags__item}>
          <span>#CSS</span>
        </button>
        <button className={styles.tags__item}>
          <span>#JavaScriptdsfdsf</span>
        </button>
        <button className={styles.tags__item}>#NodeJS</button>
      </section>
    </aside>
  )
}
