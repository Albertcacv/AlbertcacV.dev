import { useState } from "react"

import SearchForm from "../SearchForm"
import HamburgerBtn from "../HamburgerBtn"

import styles from "../../styles/Header.module.css"
import SideMenu from "../SideMenu"

export default function Header() {
  let [menuActive, setMenuctive] = useState(false)

  const showMenu = (isActive) => {
    setMenuctive(() => (menuActive = isActive))
  }

  return (
    <header className={styles.header}>
      {menuActive && <SideMenu isMenuActive={showMenu} />}
      <HamburgerBtn isMenuActive={showMenu} />
      <SearchForm />
    </header>
  )
}
