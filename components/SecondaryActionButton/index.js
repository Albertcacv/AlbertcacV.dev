import styles from './secondary-action-button.module.css'

const SecondaryActionButton = ({ path, title }) => {
  return (
    <a
      className={styles.button}
      href={path}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  )
}

export default SecondaryActionButton
