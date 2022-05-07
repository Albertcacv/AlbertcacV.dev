import styles from './aboutcard.module.css'

const AboutCard = ({ icon, title, number }) => {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>{icon}</span>

      <div className={styles.description}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
      </div>
    </article>
  )
}

export default AboutCard
