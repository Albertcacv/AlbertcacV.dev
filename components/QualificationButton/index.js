import SQualificationButton from '../../UI/SQualificationButton'
import styles from './qualificationButton.module.css'
const QualificationButton = ({ icon: Icon, title }) => {
  return (
    <SQualificationButton>
      <Icon />
      <span className={styles.title}>{title}</span>
    </SQualificationButton>
  )
}

export default QualificationButton
