import styles from './qualificationCard.module.css'
const QualificationCard = ({ title, institution, date }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        <p>{institution}</p>
        <p>{date}</p>
      </div>
    </article>
  )
}

export default QualificationCard
