import styles from '@/styles/HamburgerButton.module.css'

export default function HamburgerButton() {
  function handleClick(e) {
    e.isOpen = true
  }

  return (
    <div className={styles.hamburger}>
      <button
        onClick={handleClick}
        className={styles.hamburger__button}
      ></button>
    </div>
  )
}
