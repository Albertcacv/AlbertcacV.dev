import SideMenu from "../SideMenu"

import styles from "../../styles/hamburgerBtn.module.css"

export default function HamburgerBtn({ isMenuActive }) {
  const isActive = false

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => isMenuActive(!isActive)}
      ></button>
    </div>
  )
}
