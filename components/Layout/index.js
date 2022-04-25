import { SContent } from '../../UI/SContent'
import { SLayout } from '../../UI/SLayout'
import Header from '../Header'
import Profile from '../Profile'
const Layout = ({ children }) => {
  return (
    <SLayout>
      <Header />
      {/* 
      <Profile />
          
      */}
      <SContent>{children}</SContent>
    </SLayout>
  )
}

export default Layout
