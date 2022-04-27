import Layout from '../components/Layout'
import { ThemeContextProvider } from '../context/themeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  )
}

export default MyApp
