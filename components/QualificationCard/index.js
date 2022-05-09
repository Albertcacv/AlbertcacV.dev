import styles from './infoCard.module.css'
const InfoCard = ({ title }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
    </article>
  )
}

export default InfoCard
