import Header from '../components/Header'
import About from '../components/About'
import StackTech from '../components/StackTech'
import Proyectos from '../components/Proyectos'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <StackTech />
      <Proyectos />
      <Contact />

      <footer className="App-footer">
        <span>AlbertcacV</span>
      </footer>
    </>
  )
}
