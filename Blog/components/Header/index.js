

import Logo from '@/components/Logo'
import HamburgerButton from '@/components/HamburgerButton'
import SearchHeader from '@/components/SearchHeader'

import styles from '@/styles/Header.module.css'

export default function Header() {


  return <header className={styles.header}>
      <HamburgerButton />
      <Logo />
      <SearchHeader />
  </header>
}
