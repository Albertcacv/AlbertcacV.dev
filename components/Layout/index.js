import styles from '../../styles/layout.module.css'
import { SContent } from '../../UI/SContent'
import Header from '../Header'
import Profile from '../Profile'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Profile />
      <SContent>{children}</SContent>
    </div>
  )
}

export default Layout
