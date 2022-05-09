import styles from './action-button.module.css'

const ActionButton = ({ path, title }) => {
  return (
    <a className={styles.button} target='_blank'>
      {title}
    </a>
  )
}

export default ActionButton
