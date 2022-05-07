import styles from './qualificationButton.module.css'
const QualificationButton = ({ icon, title, actionState }) => {
  const handleClick = () => {
    if (icon.type.name === 'FaGraduationCap') {
      actionState('Education')
    } else {
      actionState('Work')
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {icon}
      <span className={styles.title}>{title}</span>
    </button>
  )
}

export default QualificationButton
