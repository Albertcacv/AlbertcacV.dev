import styles from '../../styles/layout.module.css'
import { BottomBar } from '../BottomBar'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <BottomBar />
    </div>
  )
}

export default Layout
