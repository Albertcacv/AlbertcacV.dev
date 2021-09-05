import Categories from "../Categories"
import Tags from "../Tags"

import styles from "../../styles/sidemenu.module.css"

export default function SideMenu({ isMenuActive }) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidemenu}>
        <header className={styles.sidemenu__header}>
          <button className={styles.btn}></button>
        </header>
        <h2>AlbertcacV</h2>
        <Categories />
        <Tags />
      </aside>
    </div>
  )
}
