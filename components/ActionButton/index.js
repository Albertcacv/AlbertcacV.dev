import styles from './action-button.module.css'

const ActionButton = ({ path, title }) => {
  return (
    <a className={styles.button} href={path} target='_blank' rel='noreferrer'>
      {title}
    </a>
  )
}

export default ActionButton
